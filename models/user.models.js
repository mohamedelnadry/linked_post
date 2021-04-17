const mongoose = require('mongoose')
const usermodel = mongoose.Schema({
    Fname:String,
    Lname:String,
    Username:String,
    Email:String,
    Password:String
})

module.exports = mongoose.model('user',usermodel)