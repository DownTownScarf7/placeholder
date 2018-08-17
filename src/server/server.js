require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '../../public')));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public/index', });
});

app.get('/login', (req, res) => {
  res.sendFile('login.html', { root: 'public/login', });
});

app.get('/admin', (req, res) => {
  res.sendFile('admin.html', { root: 'public/admin', });
});

app.get('/register', (req, res) => {
  res.sendFile('register.html', { root: 'public/register', });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
