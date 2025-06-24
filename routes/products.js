const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const upload = multer({
  dest: path.join(__dirname, '../uploads/'),
  limits: { fileSize: 5 * 1024 * 1024 },
});

let products = [];

router.post('/add', upload.single('image'), (req, res) => {
  const { name, price } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : '';
  if (!name || !price) return res.status(400).json({ error: 'Invalid data' });
  products.push({ id: Date.now(), name, price, image });
  res.json({ message: 'Product added successfully' });
});

router.get('/', (req, res) => {
  res.json(products);
});

router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

module.exports = router;
