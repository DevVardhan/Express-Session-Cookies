const express = require('express')
const session = require('express-session')

const app = express();

app.set('trust proxy', 1);
app.use(session({
    secret: 'password',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 1000 * 60 * 60,
    }

}))

app.get('/', (req, res) => {
    res.send("hello fellow user !")
})

/* 
for testing and production using env 
cant use secure on testing  - > fr using secure we need trust proxy to ensure that orignal ip is retrived form user not a reverse proxy
var sess = {
    secret: 'keyboard cat',
    cookie: {}
  }
  
  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
  }
     app.use(session(sess))
  */


app.listen(3000);