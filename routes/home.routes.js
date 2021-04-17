const app = require('express').Router()
const auth = require('../middleware/auth')
const homecontroller = require('../controllers/home.controller')

app.get('/home', auth.login, homecontroller.home)
app.post('/addpost', homecontroller.addPost)

module.exports = app
