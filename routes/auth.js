const express = require('express')
const router = express.Router()

const UserModel = require('../model/user')

router.post('/login/',(req, res) => {
    console.log('entra a login');
    UserModel.find({
        email: req.body.email,
        password: req.body.password
    }, function (err, user) {
        if (err) {
            res.send(err)
        }

        if (user.length === 0) {
            res.status(401).json({
                status: 401,
                message: 'Unauthorized credentials mismatch'
            })
        } else {
            res.json(user)
        }

    })
})
module.exports = router