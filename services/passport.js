const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
    {
        clientID: keys.GoogleClientID,
        clientSecret: keys.GoogleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({googleId: profile.id});
        if (existingUser)
        {
            return done(null, existingUser);
        }

        const newUser = await new User({
            googleId: profile.id,
            facebookId: '',
            email: profile.emails[0].value,
            gender: profile.gender,
            photo: profile.photos[0].value,
            itemDNA: []
        }).save();
        done(null,newUser);
    }
));

passport.use(new FacebookStrategy({
    clientID: keys.FacebookClientID,
    clientSecret: keys.FacebookClientSecret,
    callbackURL: '/auth/facebook/callback',
    proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({facebookId: profile.id});

        if (existingUser)
        {
            return done(null, existingUser);
        }

        const newUser = await new User({
            googleId: '',
            facebookId: profile.id,
            email: profile.emails[0].value,
            gender: profile.gender,
            photo: profile.photos[0].value,
            itemDNA: []
        }).save();
        done(null,newUser);
    }
));
