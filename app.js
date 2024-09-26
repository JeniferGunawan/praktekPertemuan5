// Import Express
const express = require('express');

// Inisialisasi aplikasi
const app = express();

// Port tempat server akan berjalan
const port = 3000;

// Middleware untuk parsing body request
app.use(express.json());

// Route GET
app.get('/', (req, res) => {
  res.send('Hello, GET request!');
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