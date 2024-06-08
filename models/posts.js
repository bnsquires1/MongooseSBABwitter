const {Schema, model } = require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
});

//Create the model that will control this collection
const Post = model("Post", postSchema)
/////"string of the name of the model" for the first arg, sec. arg is the new schema created.

module.exports = Post; 