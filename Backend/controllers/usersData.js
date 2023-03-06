const { validationResult } = require('express-validator/check');
//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   const error = new Error('Validation failed.');
  //   error.statusCode = 422;
  //   error.data = errors.array();
  //   throw error;
  // }
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  //try {
    //const hashedPw = await bcrypt.hash(password, 13);

    const user = new User({
      name: name,
      email: email,
      // password: hashedPw
      password: password
    });
    const result = await user.save();
    console.log('User created Successfully!')
    res.json({ message: 'User created Successfully!', userId: result._id });
  // } catch (err) {
  //   if (!err.statusCode) {
  //     err.statusCode = 500;
  //   }
  //   next(err);
  // }
};

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error('User not found please check your email.');
      error.statusCode = 401;
      throw error;
    }
    loadedUser = user;
    // const isEqual = await bcrypt.compare(password, user.password);
    // if (!isEqual) {
    //   const error = new Error('Password is not correct!, Check Your Password');
    //   error.statusCode = 401;
    //   throw error;
    // }
    const token = jwt.sign(
      {
        email: loadedUser.email,
        userId: loadedUser._id.toString()
        // email: email,
        // userId: req.userId.toString()
      },
      'secret key = Secrit plz do not hack me in 2023',
      { expiresIn: '1h' }
    );
    console.log("Token in controller of usersData = ", token)
    res.json({message: 'Log In Successfully!', token: token, userId: loadedUser._id.toString() });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getUserStatus = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error('User not found.');
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ status: user.status });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateUserStatus = async (req, res, next) => {
  const newStatus = req.body.status;
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error('User not found.');
      error.statusCode = 404;
      throw error;
    }
    user.status = newStatus;
    await user.save();
    res.status(200).json({ message: 'User updated.' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
