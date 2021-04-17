module.exports.login = (req,res,next)=>{
    if(req.session.isLogin){
        next()
    }else{
        res.redirect('/')
    }
}

module.exports.islogin = (req,res,next)=>{
    if(req.session.isLogin){
        res.redirect('/home')
    }else{
        next()
    }
}