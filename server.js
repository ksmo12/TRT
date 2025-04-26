const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { default: Brevo } = require('@groupcards/brevo'); // Updated for Brevo
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const brevo = new Brevo(process.env.BREVO_API_KEY);

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
    process.exit(1);
  }
  console.log('✅ Connected to MySQL database');
});

// Public Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'welcome.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'public', 'signup.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'dashboard.html')));
app.get('/forgot-password', (req, res) => res.sendFile(path.join(__dirname, 'public', 'forgot-password.html')));
app.get('/resetcode', (req, res) => res.sendFile(path.join(__dirname, 'public', 'resetcode.html')));

// Signup
app.post('/signup', async (req, res) => {
  const { firstname, surname, phone_number, username, email, password, language } = req.body;
  try {
    const [existing] = await db.promise().query('SELECT * FROM users WHERE email = ? OR username = ?', [email, username]);
    if (existing.length > 0) {
      return res.status(409).json({ success: false, message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    await db.promise().query(`
      INSERT INTO users (firstname, surname, phone_number, username, email, password, language, verification_token)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [firstname, surname, phone_number, username, email, hashedPassword, language, verificationToken]);

    // Send Welcome + Verification email
    await brevo.emails.send({
      from: { email: process.env.FROM_EMAIL },
      to: [{ email }],
      subject: 'Welcome to TRT Technology - Verify Your Email',
      htmlContent: `
        <h1>Welcome to TRT Technology!</h1>
        <p>Thank you for signing up. Please verify your email by clicking the link below:</p>
        <a href="${process.env.DOMAIN}/verify-email?token=${verificationToken}">Verify Email</a>
      `,
    });

    res.status(200).json({ success: true, message: 'Signup successful! Verification email sent.' });
  } catch (err) {
    console.error('❌ Signup error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Verify Email
app.get('/verify-email', async (req, res) => {
  const { token } = req.query;
  try {
    const [users] = await db.promise().query('SELECT * FROM users WHERE verification_token = ?', [token]);
    if (users.length === 0) return res.send('Invalid or expired verification link.');

    await db.promise().query('UPDATE users SET verification_token = NULL, is_verified = 1 WHERE verification_token = ?', [token]);
    res.send('✅ Email verified successfully. You can now login.');
  } catch (err) {
    console.error('❌ Verify email error:', err);
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
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.redirect('/login?error=invalid');
    if (user.is_verified === 0) return res.redirect('/login?error=unverified');

    res.redirect('/dashboard');
  } catch (err) {
    console.error('❌ Login error:', err);
    res.redirect('/login?error=unknown');
  }
});

// Forgot Password - Send Reset Code
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const [users] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) return res.status(400).json({ success: false, message: 'No user with that email.' });

    const resetCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit code
    const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await db.promise().query('UPDATE users SET reset_code = ?, reset_code_expiry = ? WHERE email = ?', [resetCode, expiry, email]);

    await brevo.emails.send({
      from: { email: process.env.FROM_EMAIL },
      to: [{ email }],
      subject: 'Your Password Reset Code',
      htmlContent: `<p>Your password reset code is: <strong>${resetCode}</strong><br>This code will expire in 1 hour.</p>`,
    });

    res.json({ success: true, message: 'Reset code sent to your email.' });
  } catch (err) {
    console.error('❌ Forgot password error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Reset Password (with Code)
app.post('/resetcode', async (req, res) => {
  const { email, reset_code, new_password } = req.body;
  try {
    const [users] = await db.promise().query('SELECT * FROM users WHERE email = ? AND reset_code = ? AND reset_code_expiry > NOW()', [email, reset_code]);
    if (users.length === 0) {
      return res.status(400).json({ success: false, message: 'Invalid or expired reset code.' });
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);

    await db.promise().query(`
      UPDATE users SET password = ?, reset_code = NULL, reset_code_expiry = NULL
      WHERE email = ?
    `, [hashedPassword, email]);

    res.json({ success: true, message: '✅ Password reset successful. You can now log in!' });
  } catch (err) {
    console.error('❌ Reset code error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Get all Courses
app.get('/api/courses', async (req, res) => {
  try {
    const [courses] = await db.promise().query('SELECT * FROM courses');
    res.json(courses);
  } catch (err) {
    console.error('❌ Fetch courses error:', err);
    res.status(500).send('Server error.');
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send('404 - Page not found.');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});