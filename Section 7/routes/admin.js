const express = require('express');

const router = express.Router();

const adminproduct = require('../controller/products')

// /admin/add-product => GET
router.get('/add-product',adminproduct.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',adminproduct.postAddProduct);

module.exports = router;
