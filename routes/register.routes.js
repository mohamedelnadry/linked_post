const app = require('express').Router()

const validation = require('../validators/register.validators')

const registercontroller = require('../controllers/register.controller')

app.get('/register', registercontroller.register)

app.post('/handelRegister', validation, registercontroller.handelregister);

module.exports = app