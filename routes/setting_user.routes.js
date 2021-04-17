const app = require('express').Router()
const auth = require('../middleware/auth')
const validation = require('../validators/edit.validators')

const settingcontoller = require('../controllers/setting.controller')

app.get('/accountSetting', auth.login, settingcontoller.userAccount)


app.post('/editUSER', validation, settingcontoller.editUser)


module.exports = app