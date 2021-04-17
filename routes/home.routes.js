const app = require('express').Router()
const auth = require('../middleware/auth')
const post = require('../models/post.model')
const myformat = require('../helper/helper')


app.get('/home', auth.login, async (req, res) => {
    const posts = await post.find({}).populate('user_id','Username Email -_id')
    res.render('home',{posts,username:req.session.username,format:myformat})
})
app.post('/addpost', async (req, res) => {
    const { title, desc } = req.body
    await post.insertMany({
        title, desc, user_id: req.session.userID
    })
    res.redirect('/home')
})

module.exports = app