const Recipe = require("../models/recipe");

module.exports = {
  index,
  new: newRecipe,
  create,
  show,
  createComment,
  edit,
  update,
  delete: deleteRecipe,
};

function index(req, res) {
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
  req.body.owner = req.user._id;
  Recipe.create(req.body, function (err, recipeDocument) {
    res.redirect("/recipes");
  });
}

function show(req, res) {
  Recipe.findById(req.params.id, function (err, recipeDocument) {
    // Find all comments by recipeId
    // make sure to populate the user on all of the comments
    Recipe.findById(req.params.id)
      .populate("comments.user")
      .populate("owner")
      .exec(function (err, recipeDocument) {
        res.render("recipes/show", {
          title: "Recipe Detail",
          recipe: recipeDocument,
          comments: [],
        });
      });
  });
}

function createComment(req, res) {
  Recipe.findById(req.params.id, function (err, recipe) {
    // update req.body to contain user info
    req.body.user = req.user._id;
    // add comment
    recipe.comments.push(req.body);
    recipe.save(function (err) {
      res.redirect(`/recipes/${recipe._id}`);
    });
  });
}

function edit(req, res) {
  const arguments = {
    _id: req.params.id,
    owner: req.user._id,
  };
  Recipe.findOne(arguments, function (err, recipe) {
    if (err || !recipe) {
      return res.redirect("/recipes");
    }
    res.render("recipes/edit", {
      title: "Edit Recipe",
      recipe,
    });
  });
}

function update(req, res) {
  Recipe.findOneAndUpdate(
    {
      _id: req.params.id,
      owner: req.user._id,
    },
    req.body,
    { new: true },
    function (err, recipe) {
      if (err || !recipe) {
        console.log("Error", err);
        return res.redirect("/recipes");
      }
      res.redirect(`/recipes/${recipe._id}`);
    }
  );
}

function deleteRecipe(req, res) {
  Recipe.findByIdAndDelete(req.params.id, function (err) {
    res.redirect("/recipes");
  });
}
