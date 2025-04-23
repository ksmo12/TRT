const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'welcome.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'public', 'signup.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'dashboard.html')));
app.get('/forgot-password', (req, res) => res.sendFile(path.join(__dirname, 'public', 'forgot-password.html')));
app.get('/reset-password', (req, res) => res.sendFile(path.join(__dirname, 'public', 'reset-password.html')));

// Signup
app.post('/signup', async (req, res) => {
  const { firstname, surname, phone_number, username, email, password, language } = req.body;
  try {
    const [existing] = await db.promise().query('SELECT * FROM users WHERE email = ? OR username = ?', [email, username]);
    if (existing.length > 0) return res.status(409).json({ success: false, message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    await db.promise().query(`
      INSERT INTO users (firstname, surname, phone_number, username, email, password, language, verification_token)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [firstname, surname, phone_number, username, email, hashed, language, verificationToken]
    );

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'Verify Your Email',
      html: `<p>Click to verify your email:</p><a href="${process.env.DOMAIN}/verify-email?token=${verificationToken}">Verify Email</a>`
    });

    res.status(200).json({ success: true, message: 'Signup successful! Verification email sent.' });
  } catch (err) {
    console.error('❌ Signup error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Email Verification
app.get('/verify-email', async (req, res) => {
  const token = req.query.token;
  try {
    const [users] = await db.promise().query('SELECT * FROM users WHERE verification_token = ?', [token]);
    if (users.length === 0) return res.send('Invalid or expired token');

    await db.promise().query('UPDATE users SET verification_token = NULL, is_verified = 1 WHERE verification_token = ?', [token]);
    res.send('Email verified successfully. You can now log in.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const [users] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) return res.redirect('/login?error=invalid');

    const user = users[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.redirect('/login?error=invalid');
    if (user.is_verified === 0) return res.redirect('/login?error=unverified');

    res.redirect('/dashboard');
  } catch (err) {
    console.error('❌ Login error:', err);
    res.redirect('/login?error=unknown');
  }
});

// Forgot Password
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const token = crypto.randomBytes(32).toString('hex');
    await db.promise().query('UPDATE users SET reset_token = ?, reset_token_expiry = DATE_ADD(NOW(), INTERVAL 1 HOUR) WHERE email = ?', [token, email]);

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'Password Reset',
      html: `<p>Click to reset your password:</p><a href="${process.env.DOMAIN}/reset-password?token=${token}">Reset Password</a>`
    });

    res.json({ success: true, message: 'Password reset email sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Reset Password
app.post('/reset-password', async (req, res) => {
  const { token, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const [result] = await db.promise().query('UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE reset_token = ? AND reset_token_expiry > NOW()', [hashed, token]);

    if (result.affectedRows === 0) return res.status(400).json({ success: false, message: 'Invalid or expired token' });

    res.json({ success: true, message: 'Password reset successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Courses API
app.get('/api/courses', async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM courses');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
});

// 404 route
app.use((req, res) => res.status(404).send('Page not found.'));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});