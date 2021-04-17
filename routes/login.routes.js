const app = require('express').Router()
const usermodel = require('../models/user.models')
const bcrypt = require('bcrypt');
const validation = require('../validators/login.validators')
const { validationResult } = require('express-validator');
let hour = 3600000
const auth = require('../middleware/auth')


app.get('/',auth.islogin ,(req, res) => {
    // don't back to login again
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('login', { errors: req.flash('errors'), oldDATA: req.flash('oldDATA'), emailexist: req.flash('emailexist'), mypassword: req.flash('mypassword') })
})  
app.post('/handelLogin', validation, async (req, res) => {
    const { Email, Password } = req.body
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        let data = await usermodel.findOne({ Email })
        if (data) {
            const match = await bcrypt.compare(Password, data.Password);
            if (match) {
                req.session.cookie.expires = new Date(Date.now() + hour)
                req.session.cookie.maxAge = hour
                req.session.isLogin = true
                req.session.userID = data._id
                req.session.username = data.Username
                res.redirect('/home')
            } else {
                req.flash('oldDATA', { Email })
                req.flash('mypassword', true)
                res.redirect('/')
            }
        } else {
            req.flash('oldDATA', { Email })

            req.flash('emailexist', true)

            res.redirect('/')
        }
    } else {
        console.log(errors.array());
        req.flash('oldDATA', { Email })
        req.flash('errors', errors.array())
        res.redirect('/')
    }


})
app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
})

module.exports = app