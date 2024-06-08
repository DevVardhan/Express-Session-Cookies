const MongoStore = require('connect-mongo');
const session = require('express-session');

const sessionMiddlewear = () => {
    session({
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
    })

}



const getHandler = (req, res) => {
    if (req.session) {
        try {
            if (!req.session.count) {
                req.session.count = 1;
            } else {
                req.session.count++;
            }

            res.status(200).send(`You have visited the site ${req.session.count} times`);
        } catch (err) {
            res.status(500).send(`Error occurred: ${err}`);
        }
    } else {
        res.status(404).send('Session not found (first visit?)');
    }
};

module.exports = { getHandler, sessionMiddlewear };
