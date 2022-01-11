const Recipe = require('../models/recipe');

module.exports = {
   
}


// function create(req, res){
//     console.log(req.params.id);
//     console.log(req.body);
//     Recipe.findById(req.params.id, function(err, recipe){
//         // update req.body to contain user info
//         req.body.userId = req.user._id;
//         req.body.userName = req.user.name;
//         // add comment 
//         recipe.comments.push(req.body);
//         recipe.save(function(err){
//             res.redirect(`/recipes/${recipe._id}`);
//         })
//     })
// }