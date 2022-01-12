var express = require("express");
var router = express.Router();
const recipesCtrl = require("../controllers/recipes");
const isLoggedIn = require("../users/isLoggedIn");

router.get("/", isLoggedIn, recipesCtrl.index);
router.get("/new", recipesCtrl.new);
router.get("/:id", recipesCtrl.show);
router.post("/", recipesCtrl.create);
router.post("/:id/comments",isLoggedIn, recipesCtrl.createComment);
router.get("/:id/edit", isLoggedIn, recipesCtrl.edit);
router.post("/:id", isLoggedIn, recipesCtrl.update);

module.exports = router;
