const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
  }

exports.postAddProduct = (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body.title))
  const product = new Product(obj);
  product.save(); 
  res.redirect('/');
}

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) =>{
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path:'/'
    });
  })
}