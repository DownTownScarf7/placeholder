require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname));
app.use(express.json());
app.use('/public', express.static('public'));
app.use(path.join('../', __dirname), express.static('src'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'admin.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'registration.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
