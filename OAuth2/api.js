require('dotenv').config();
require('./strategies/discordStrategy');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const api = express();
const port = process.env.PORT || 5001;

const routes = require('./routes');

const mongodb = "mongodb+srv://Moderator:RcL8zRDs9Jso71zG@hustleprime.qnahb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    api.listen(port, () => {
        console.log("Up and Running on port: " + port);
    });
})
.catch((err) => console.log(err))

api.use(session({
    secret              :       'i like coffee',
    cookie              :       { maxAge: 60000*60*24 },
    resave              :       false,
    saveUninitialized   :       false,
    store               :       MongoStore.create({ mongoUrl: mongodb})
}));

api.use(passport.initialize());
api.use(passport.session());
api.use('/api', routes);

