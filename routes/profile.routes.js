const app = require('express').Router()
const profilecontroller = require('../controllers/profile.controller')


app.get('/myprofile', profilecontroller.profle)

app.post('/delete', profilecontroller.delete)

app.post('/editPOST', profilecontroller.edit)

module.exports = app