const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'trt_users'
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// Routes to serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// Signup Route
app.post('/signup', async (req, res) => {
  const { firstname, surname, phone, username, email, password, language } = req.body;

  try {
    const checkQuery = 'SELECT * FROM users WHERE email = ? OR username = ?';
    db.query(checkQuery, [email, username], async (err, results) => {
      if (err) {
        console.error('❌ Error checking user:', err);
        return res.status(500).json({ success: false, message: 'Server error.' });
      }

      if (results.length > 0) {
        return res.status(409).json({ success: false, message: 'User already exists.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const insertQuery = `
        INSERT INTO users (firstname, surname, phone, username, email, password, language)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      db.query(insertQuery, [firstname, surname, phone, username, email, hashedPassword, language], (err) => {
        if (err) {
          console.error('❌ Error inserting user:', err);
          return res.status(500).json({ success: false, message: 'Error creating account.' });
        }

        return res.status(200).json({ success: true, message: 'Signup successful!' });
      });
    });
  } catch (error) {
    console.error('❌ Signup error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error('❌ Login error:', err);
      return res.status(500).send('Server error.');
    }

    if (results.length === 0) {
      return res.status(401).send('⚠️ User not found.');
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send('❌ Incorrect password.');
    }

    // Redirect to dashboard
    res.redirect('/dashboard');
  });
});

// Public API route for courses
app.get('/api/courses', (req, res) => {
  const sql = 'SELECT * FROM courses';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('❌ Error fetching courses:', err);
      return res.status(500).send('Server error.');
    }

    res.json(results);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});