const Product = require('../models/products');

/// Get All DB User Produsts
exports.getproducts = async (req, res, next) => {

  const totalItems = await Product.find().countDocuments();
  console.log("Number of items in DB food Controller", totalItems)
  const products = await Product.find().populate('creator')

  res.status(200).json({
    message: 'Fetched Data Successfully.',
    products: products,
    totalItems: totalItems
  });
};

/// Create Produsts
exports.createproduct = async (req, res, next) => {

  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;

  const product = new Product({
    name: name,
    price: price,
    description: description,
    creator: req.userId
  });
  console.log("product detail in Food Controller", product)
  await product.save();
  res.json({ message: 'Product added  Successfully!' });
};

/// Search a Single Product
exports.getsingleproduct = async (req, res, next) => {
  const productId = req.params.productId;
  const product = await Product.findById(productId);
  res.status(200).json({ message: 'product fetched from DB.', product: product });
};

/// Update a Single Product
exports.updateproduct = async (req, res, next) => {
  const productId = req.params.productId;
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const product = await Product.findById(productId).populate('creator');
  product.name = name;
  product.description = description;
  product.price = price;
  const result = await product.save();
  res.json({ message: 'product updated successfully!' });
};

/// Delete a Single Product
exports.deleteproduct = async (req, res, next) => {
  const productId = req.params.productId;
  await Product.findByIdAndRemove(productId);
  res.json({ message: 'Product deleted successfully.' });
};

