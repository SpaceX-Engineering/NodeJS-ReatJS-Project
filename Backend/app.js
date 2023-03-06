const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const foodRoutes = require('./routes/foodData');
const usersDataRoutes = require('./routes/usersData');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/foodData', foodRoutes);
app.use('/usersData', usersDataRoutes);


mongoose
  .connect(
    'mongodb+srv://ITM:0000@cluster0.c4qt6u3.mongodb.net/foodApp?retryWrites=true&w=majority'
  )
  .then(result => {
    const server = app.listen(3005);
    console.log('Data Base Connected ! Lets Rock');
  })
  .catch(err => console.log(err));
