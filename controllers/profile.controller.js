const posts = require('../models/post.model')
const myformat = require('../util/helper')

module.exports.profle = async (req, res) => {
    const data = await posts.find({ user_id: req.session.userID }).populate('user_id', 'Username Email -_id')
    res.render('profile', { data: data, username: req.session.username, format: myformat })
}

module.exports.delete = async (req, res) => {
    // console.log(req.body);
    const { inputID } = req.body
    await posts.findByIdAndDelete({ _id: inputID })
    res.redirect('/myprofile')
}

module.exports.edit = async (req, res) => {
    console.log(req.body);
    const { myid, Newtitle, Newdesc } = req.body
    await posts.findByIdAndUpdate({ _id: myid }, { title: Newtitle, desc: Newdesc })
    res.redirect('/myprofile')
}
