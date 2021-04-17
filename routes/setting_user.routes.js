const app = require('express').Router()
const auth = require('../middleware/auth')
const { validationResult } = require('express-validator');
const validation = require('../validators/edit.validators')
const usermodel = require('../models/user.models')

const bcrypt = require('bcrypt');
app.get('/accountSetting', auth.login, (req, res) => {
    res.render('setting', { username: req.session.username,Verrors:req.flash('validationErrors'),OldPass:req.flash('OldPass'),samePass:req.flash('samePass'),success:req.flash('success')})
})


app.post('/editUSER', validation, async (req, res) => {
    const { Opassword, Npassword } = req.body
    let errors = validationResult(req)
    if (errors.isEmpty()) {
        const user = await usermodel.findById({ _id: req.session.userID })
        const match = await bcrypt.compare(Opassword, user.Password);
        if (match) {
            if (Opassword == Npassword) {
                console.log('error');
                req.flash('samePass', true)
                res.redirect('/accountSetting')
            } else {
                bcrypt.hash(Npassword, 7, async function (err, hash) {
                    await usermodel.findOneAndUpdate({ _id: req.session.userID }, { Password: hash })
                    req.flash('success',true)
                    res.redirect('/accountSetting');
                });
            }
        } else {
            console.log('error1');
            req.flash('OldPass', true)
            res.redirect('/accountSetting')
        }
    } else {
        req.flash('validationErrors', errors.array())
        res.redirect('/accountSetting')
    }

})


module.exports = app