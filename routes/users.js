var router = require('express').Router();


// GET /students
// router.get('/students', studentsCtrl.index);



// Authorizing the user to use a route
// probably only want to use this on
// post, put or delete routes
function isLoggedIn(req, res, next) {
	// req.isAuthenticated() this is given to us by passport
	// it returns true or false
	if ( req.isAuthenticated() ) return next(); // next() go to the next function in middleware, above situation studentsCtrl.addFact
	res.redirect('/auth/google'); // redirect them to login
}



module.exports = router;