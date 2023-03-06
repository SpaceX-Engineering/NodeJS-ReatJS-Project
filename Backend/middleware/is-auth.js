const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'secret key = Secrit plz do not hack me in 2023');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  console.log("requserID=",req.userId)
  next();
};


// module.exports=(req, res, next)=> {
//   const bearerHeader = req.headers['authorization'];
//   if (typeof bearerHeader !== 'undefined') {
//       const bearer = bearerHeader.split(" ");
//       const token=bearer[1];
//       req.token=token;
//       next();
//   }
//   else{
//       res.send({
//           result:'Token is not valid'
//       })
//   }
// }