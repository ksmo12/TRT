const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Signup route
app.post('/signup', async (req, res) => {
  const { firstname, surname, phone, username, email, password, language } = req.body;

  try {
    const checkUser = await pool.query(
      'SELECT * FROM users WHERE email = $1 OR username = $2',
      [email, username]
    );

    if (checkUser.rows.length > 0) {
      return res.status(409).json({ success: false, message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      `INSERT INTO users (firstname, surname, phone, username, email, password, language)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [firstname, surname, phone, username, email, hashedPassword, language]
    );

    res.status(200).json({ success: true, message: 'Signup successful!' });
  } catch (err) {
    console.error('❌ Signup error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.redirect('/login?error=invalid');
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.redirect('/login?error=invalid');
    }

    // Login successful
    res.redirect('/dashboard');
  } catch (err) {
    console.error('❌ Login error:', err);
    res.redirect('/login?error=unknown');
  }
});

// Courses API route
app.get('/api/courses', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM courses');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching courses:', err);
    res.status(500).send('Server error.');
  }
});

// 404 route
app.use((req, res) => {
  res.status(404).send('Page not found.');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});