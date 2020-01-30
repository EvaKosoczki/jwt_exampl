require('dotenv').config()

var express = require('express');
var router = express.Router();
let userBll = require('../db/user_bll');
let userBllSmp = new userBll()
const jwt = require('jsonwebtoken')

/* GET users listing. */
let accessToken = '';
let loggedInData = {};


function authenticateToken(req, res, next) {
    const authHeader = res.get('authorization')
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
        return res.sendStatus(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}


router.post('/new', async (req, res, next) => {
    let newUser = await userBllSmp.createUser(req.body)
    res.json(newUser)
})

router.post('/login', async (req, res, next) => {
    loggedInData = await userBllSmp.loginUser(req.body)
    if (loggedInData.length == 1) {
        user = req.body.email + req.body.id
        accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        accessToken = ('Bearer ' + accessToken)
        console.log(accessToken)
        res.send({ accessToken: accessToken })
    }
    else {
        console.log('Nem jó adatok')
        accessToken = '';
        res.sendStatus(400)
    }
})

function setReqHeader(req, res, next) {
    res.setHeader('Authorization', accessToken)
    next()
}

router.get('/', setReqHeader, authenticateToken, function (req, res, next) {
    res.send(loggedInData);
});



module.exports = router;
