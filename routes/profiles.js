var router = require("express").Router();
const profilesCtrl = require("../controllers/profiles");
const isLoggedIn = require("../users/isLoggedIn");

// TODO: implement my_profile- show current users profile
router.get("/", isLoggedIn, profilesCtrl.index);

module.exports = router;
