const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Statik dosyalar (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// API rotaları
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));

// Geri kalan tüm yollar frontend'e yönlendir
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});