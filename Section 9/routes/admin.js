const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin')

// /admin/add-product => GET
router.get('/add-product',adminController.getAddProduct);

// /admin/Products => GET
router.get('/products',adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product',adminController.postAddProduct);

module.exports = router;
