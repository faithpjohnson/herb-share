const Recipe = require("../models/recipe");

module.exports = {
  index,
  new: newRecipe,
  create,
};

function index(req, res) {
  console.log(req.user);

  Recipe.find({}, function (err, recipeDocuments) {
    res.render("recipes/index", {
      recipes: recipeDocuments,
      title: "Recipes",
    });
  });
}

function newRecipe(req, res) {
  res.render("recipes/new", { title: "Recipes New" });
}

function create(req, res) {
  // log to see what user filled out
  console.log(req.body);

  Recipe.create(req.body, function (err, recipeDocument) {
    console.log(recipeDocument, "<recipeDocument");

    res.redirect("/recipes");
  });
}
