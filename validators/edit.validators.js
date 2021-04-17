const { check } = require('express-validator');

module.exports = [
    check('Opassword').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    check('Npassword').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    check('Rpassword').custom((value, { req }) => {
        if (value !== req.body.Npassword) {
            return false;
        }
        return true;
    })
] 
