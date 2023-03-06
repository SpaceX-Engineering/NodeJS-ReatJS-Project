const express = require('express');
const foodController = require('../controllers/foodData');
const isAuth = require('../middleware/is-auth');
const router = express.Router();


router.post('/add-products', isAuth, foodController.createproduct);

router.get('/get-products', isAuth, foodController.getproducts);

router.get('/get-product/:productId', isAuth, foodController.getsingleproduct);

router.put('/update-products/:productId', isAuth, foodController.updateproduct);

router.delete('/del-products/:productId', isAuth, foodController.deleteproduct);

module.exports = router;
