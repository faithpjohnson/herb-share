const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require("../models/user");
//Require your User Model here!

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    // search database to see if user exists
    // if the user does exist, 
    // take the ID that was found and store it in the cookie
    User.findOne({ googleId: profile.id }, function (err, userDoc) {
      if (err) return cb(err); // if there's an error proceed to the next middleware function

      if( userDoc) { // if the user exists

        return cb(null, userDoc); // send the user doc to the next middleware function
      } else {
        // create the user in the db
        const newUser = new User({
          name: profile.displayName, 
          email: profile.emails[0].value, 
          googleId: profile.id,
        });

        newUser.save(function (err){
          if (err) return cb(err);
          return cb(null, newUser); // success, pass that userDoc to the next place in the middleware chain
        })
      }
    })
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {

  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled) whatever you called in the callback
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user
  User.findById(id, function (err, userDoc){
    done(err, userDoc);
  });
});



