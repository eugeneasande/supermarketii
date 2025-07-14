
const express = require('express');
const router = express.Router();
const { Product, User } = require('../models');

router.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.post('/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, password } });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ username: user.username, role: user.role });
});

module.exports = router;
