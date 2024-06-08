const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

app.use(session({
    name: 'express-session.sid',
    secret: 'secret key',
    secure: true,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://devvardhan4:aN6ShTFvcvIUnGQt@cluster0.pbalsq8.mongodb.net/',
        collectionName: 'Session',
        timestamps: true
    })
}));
app.get('/', (req, res) => {
    if (!req.session.count) {
        req.session.count = 1;
    } else {
        req.session.count++;
    }

    res.send(`you have visited the site ${req.session.count} times`)
})

app.listen(4000, () => {
    console.log("App listening on port 4000")
})

