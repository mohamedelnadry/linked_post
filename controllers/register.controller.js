const usermodel = require('../models/user.models')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

module.exports.register = (req, res) => {
    res.render('register', { errors: req.flash('errors'), emailExist: req.flash('emailExist'), oldDATA: req.flash('oldDATA'), success: req.flash('success') })
}

module.exports.handelregister = async (req, res) => {
    const { Fname, Lname, Username, Email, Password } = req.body
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        let user = await usermodel.findOne({ Email })
        if (user) {
            req.flash('emailExist', true)
            res.redirect('/register')
        } else {
            bcrypt.hash(Password, 7, async function (err, hash) {
                await usermodel.insertMany({ Fname, Lname, Username, Email, Password: hash })
                req.flash('success', true)
                res.redirect('/register');
            });
        }
    } else {
        req.flash('oldDATA', { Fname, Lname, Username, Email, Password })
        req.flash('errors', errors.array())
        res.redirect('/register')
    }

}
