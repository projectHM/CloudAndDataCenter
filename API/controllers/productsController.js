const express = require('express');
const router = express.Router();

const product = require('../models/product');

const sendProducts = (req, res) => res.json(res.locals.products);
const sendProduct = (req, res) => res.json(res.locals.product);
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/', product.getAll, sendProducts );
router.post('/', product.create, sendProduct );
router.put('/:id', product.update, sendProduct);
router.delete('/:id', product.delete, sendSuccess);

module.exports = router;