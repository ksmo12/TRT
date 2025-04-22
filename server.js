const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve files from 'public'

// PostgreSQL Pool setup for Render
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Route: Serve welcome.html from public folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

// Route: Serve signup, login, dashboard pages
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Signup Handler
app.post('/signup', async (req, res) => {
  const { firstname, surname, phone, username, email, password, language } = req.body;

  try {
    const checkQuery = 'SELECT * FROM users WHERE email = $1 OR username = $2';
    const checkResult = await pool.query(checkQuery, [email, username]);

    if (checkResult.rows.length > 0) {
      return res.status(409).json({ success: false, message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery = `
      INSERT INTO users (firstname, surname, phone, username, email, password, language)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    await pool.query(insertQuery, [firstname, surname, phone, username, email, hashedPassword, language]);

    return res.status(200).json({ success: true, message: 'Signup successful!' });
  } catch (error) {
    console.error('❌ Signup error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Login Handler
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(sql, [email]);

    if (result.rows.length === 0) {
      return res.status(401).send('⚠️ User not found.');
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send('❌ Incorrect password.');
    }

    res.redirect('/dashboard');
  } catch (err) {
    console.error('❌ Login error:', err);
    return res.status(500).send('Server error.');
  }
});

// Get courses
app.get('/api/courses', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM courses');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching courses:', err);
    return res.status(500).send('Server error.');
  }
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).send('Page not found.');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is live on port ${PORT}`);
});