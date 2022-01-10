const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    date: {
        type: Date, 
        default: Date.now,
    }
})


const recipeSchema = new Schema({
    title: { 
        type: String, 
        required: true,
    }, 
    description: {
        type: String, 
        required: true,
    }, 
    ingredients: {
        type: String, 
        required: true,
    }, 
    date: {
        type: Date, 
        default: Date.now,
    },
    comments: [commentSchema],

});

module.exports = mongoose.model("Recipe", recipeSchema);