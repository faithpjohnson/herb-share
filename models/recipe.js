const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userName: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const recipeSchema = new Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
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
    instructions: { 
      type: String, 
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
