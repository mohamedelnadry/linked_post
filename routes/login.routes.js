const app = require('express').Router()
const validation = require('../validators/login.validators')
const auth = require('../middleware/auth')
const logincontroller = require('../controllers//login.controller')

app.get('/', auth.islogin, logincontroller.login)
app.post('/handelLogin', validation, logincontroller.handelLogin)
app.get('/logout', logincontroller.logout)

module.exports = app