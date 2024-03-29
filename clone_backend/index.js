const express = require("express");
const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport"); 
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json()); 

mongoose.connect(
    "mongodb+srv://atharv_10:" + 
        process.env.MONGO_PASS +
        "@cluster0.9bdjoh9.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser : true,
        useUnifiedtopology : true,
    }
)
.then((x)=>{
    console.log("Connected to Mongo");
})
.catch((err)=>{
    console.log("Error while connecting to mongo");
});


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

app.get("/", (req,res) => {
    res.send("hello world!!");
});

app.use("/auth",authRoutes);
app.use("/song",songRoutes);
app.use("/playlist",playlistRoutes);

app.listen(port, ()=>{
    console.log("This app is running on port "+ port);
});