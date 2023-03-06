const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();

const secretkey = 'Hacker always try to crack code';



app.get('/', (req, res) => {
    res.json({
        message: 'Your System is Under Attack ...........'
    })
})


app.post('/login', (req, resp) => {
    const user = {
        id: 007,
        username: 'James Bond',
        email: 'bond007@gmail.com'
    }
    jwt.sign({ user }, secretkey, { expiresIn: '366s' }, (err, token) => {
        resp.json({ token })
    })
})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token=bearer[1];
        req.token=token;
        next();
    }
    else{
        res.send({
            result:'Token is not valid'
        })
    }
}

app.post('/profile',verifyToken, (req, resp) => {
jwt.verify(req.token,secretkey,(err,authdata)=>{
    if(err){
        res.send({
            result:'Invalid token'})
    }
    else{
        resp.json({ message:'Profile Accessed',authdata })
    }
})
})

app.listen(3000, () => {
    console.log('app is running on Port localhost:3000')
})