const express = require('express');
const { body } = require('express-validator/check');
const User = require('../models/user');
const authController = require('../controllers/usersData');
const isAuth = require('../middleware/is-auth');
const router = express.Router();

//----------------- General Connection Route ------------
router.get('/chk', (req, res) => {
  res.json({message: 'Work Perfectly Chk Other Logic ...........'})
})

//--------------- Login Route
router.post('/login', authController.login);

//----------------- Signup Route ------------
router.post(
  '/signup',authController.signup
);

module.exports = router;
