var router = require("express").Router();
const usersCtrl = require("../controllers/users");
const isLoggedIn = require("../users/isLoggedIn");

// GET /students
router.get("/users", isLoggedIn, usersCtrl.index);
// router.post('/comments', isLoggedIn, usersCtrl.addComment);

// // Authorizing the user to use a route
// // probably only want to use this on
// // post, put or delete routes
// const isLoggedIn = function(req, res, next) {
//   // req.isAuthenticated() this is given to us by passport
//   // it returns true or false
//   console.log("checking user auth");
//   if (req.isAuthenticated()) {
//     console.log("user is authenticated");
//     return next(); // next() go to the next function in middleware, above situation studentsCtrl.addFact
//   } else {
//     console.log("user is not authenticated");
//   }
//   res.redirect("/auth/google"); // redirect them to login
// }

module.exports = router;
