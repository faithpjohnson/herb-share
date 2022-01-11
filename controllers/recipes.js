const Recipe = require("../models/recipe");

module.exports = {
  index,
  new: newRecipe,
  create,
  show,
  createComment,
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
  console.log(req.user);
  res.render("recipes/new", { title: "Recipes New" });
}

function create(req, res) {
  // log to see what user filled out
  console.log(req.body);
  

  Recipe.create(req.body, function (err, recipeDocument) {
    console.log(recipeDocument, "<recipeDocument");

    res.redirect('/recipes');
  })
}

function show(req, res) {
  console.log(req.params, "<-- req.params in the show route");

  Recipe.findById(req.params.id, function (err, recipeDocument) {
    res.render("recipes/show", {
      title: "Recipe Detail",
      recipe: recipeDocument,
    });
  });
}


function createComment(req, res){
  console.log(req.params.id);
  console.log(req.body);
  Recipe.findById(req.params.id, function(err, recipe){
      // update req.body to contain user info
      // req.body.userId = req.user._id;
      // req.body.userName = req.user.name;
      // add comment 
      recipe.comments.push(req.body);
      recipe.save(function(err){
          res.redirect(`/recipes/${recipe._id}`);
      })
  })
}