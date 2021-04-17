const mongoose = require('mongoose')
const posts = mongoose.Schema({
    title:String,
    desc:String,
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    time : { type : Date, default: Date.now }
})

module.exports = mongoose.model('posts',posts)