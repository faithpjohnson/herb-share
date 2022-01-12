var express = require("express");
var router = express.Router();
const commentsCtrl = require('../controllers/comments');
// const isLoggedIn = require("../users/isLoggedIn");

// router.post('/:id', commentsCtrl.create);
// router.post("/:id/comments",isLoggedIn, commentsCtrl.createComment);

module.exports = router;