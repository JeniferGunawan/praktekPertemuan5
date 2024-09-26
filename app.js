// Import Express
const express = require('express');

// Inisialisasi aplikasi
const app = express();

// Port tempat server akan berjalan
const port = 3000;

// Middleware untuk parsing body request
app.use(express.json());

// Menyajikan file statis dari folder 'public'
app.use(express.static('public'));

// Route GET
app.get('/', (req, res) => {
  res.send('Hello, GET request!');
});

// Route GET untuk /text
app.get('/text', (req, res) => {
  res.send('Ini adalah response text.');
});

// Route GET untuk /html
app.get('/html', (req, res) => {
  res.send('<h1>Ini adalah response HTML</h1>');
});

// Route GET untuk /json
app.get('/json', (req, res) => {
  res.json({ message: 'Ini adalah response JSON' });
});

// Route POST
app.post('/submit', (req, res) => {
  const { name } = req.body; // Mendapatkan nilai 'name' dari body request
  res.send(`Hello, ${name}!`); // Mengirimkan response dengan nama yang di-input
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});