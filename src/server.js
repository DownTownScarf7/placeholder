require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 8080;
const htmlLink = html => path.join(__dirname, 'public', html);

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(htmlLink('index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(htmlLink('login.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(htmlLink('admin.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(htmlLink('register.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
