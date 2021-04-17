const myformat = require('../util/helper')
const post = require('../models/post.model')



module.exports.home = async (req, res) => {
    const posts = await post.find({}).populate('user_id', 'Username Email -_id')
    res.render('home', { posts, username: req.session.username, format: myformat })
}

module.exports.addPost = async (req, res) => {
    const { title, desc } = req.body
    await post.insertMany({
        title, desc, user_id: req.session.userID
    })
    res.redirect('/home')
}