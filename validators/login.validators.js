const { check } = require('express-validator');

module.exports = [
    check('Email').isEmail(),
    check('Password').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
] 
