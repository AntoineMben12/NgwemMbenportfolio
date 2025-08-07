// server/routes/adminRoute.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Replace with your own secret and admin credentials
const fs = require('fs');
const path = require('path');
const ADMIN_FILE = path.join(__dirname, '../admin.json');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const crypto = require('crypto');

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function getAdmin() {
  if (fs.existsSync(ADMIN_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(ADMIN_FILE, 'utf8'));
    } catch {
      return null;
    }
  }
  return null;
}

function setAdmin(admin) {
  const hashed = { username: admin.username, password: hashPassword(admin.password) };
  fs.writeFileSync(ADMIN_FILE, JSON.stringify(hashed));
}


// LOGIN
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const admin = getAdmin();
  if (admin && username === admin.username && hashPassword(password) === admin.password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

// SIGNUP
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }
  if (getAdmin()) {
    return res.status(400).json({ message: 'Admin already exists' });
  }
  setAdmin({ username, password });
  return res.json({ success: true });
});

module.exports = router;
