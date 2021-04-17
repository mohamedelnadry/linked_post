const app = require('express').Router()
const pageNotFoundController = require('../controllers/pageNotFound.controller')

app.get('*',pageNotFoundController.pagenotfound)

module.exports = app