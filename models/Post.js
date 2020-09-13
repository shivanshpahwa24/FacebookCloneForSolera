const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: { type: String, required: true },

  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  hearts: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      text: { type: String, required: true },
      likes: {
        type: Number,
        default: 0,
      },
      date: { type: Date, default: Date.now },
    },
  ],
  date: { type: Date, default: Date.now },
});

module.exports = Post = mongoose.model("post", PostSchema);
