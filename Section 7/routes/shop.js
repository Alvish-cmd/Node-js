const express = require('express');

const router = express.Router();

const adminproduct = require('../controller/products')

router.get('/',adminproduct.getProduct);

module.exports = router;
