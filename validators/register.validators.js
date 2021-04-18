const { check } = require('express-validator');


module.exports = [
    check('Fname').matches((/^[A-Za-z ,.'-]+$/)),
    check('Lname').matches((/^[A-Za-z ,.'-]+$/)),
    check('Username').matches((/^[a-zA-Z0-9]+$/)),
    check('Email').isEmail(),
    check('Password').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
] 
