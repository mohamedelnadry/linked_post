const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
var flash = require('connect-flash');
require('dotenv').config()
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
  uri: process.env.URL_DATABASE,
  collection: 'mySessions'
});
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store,
}))

app.use(flash())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
mongoose.set('useFindAndModify', false);
app.use(express.urlencoded({ extended: false }))
app.use(require('./routes/home.routes'))
app.use(require('./routes/login.routes'))
app.use(require('./routes/register.routes'))
app.use(require('./routes/profile.routes'))
app.use(require('./routes/setting_user.routes'))
app.use(require('./routes/pageNotFound'))
mongoose.connect(process.env.URL_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.log(err.reason));
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port port!`))
