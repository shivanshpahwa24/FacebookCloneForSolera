const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Post = require("../../models/Post");

// @route  POST api/posts
// @desc   Create a post

router.post(
  "/",
  [check("text", "Text is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newPost = new Post({
        text: req.body.text,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  GET api/posts
// @desc   Get all posts

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });

    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  PUT api/posts/like/:id
// @desc   Like a post

router.put("/like/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    post.likes += 1;

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route  PUT api/posts/dislike/:id
// @desc   Dislike a post

router.put("/dislike/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    post.dislikes += 1;

    await post.save();

    res.json(post.dislikes);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route  PUT api/posts/heart/:id
// @desc   Give a heart

router.put("/heart/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    post.hearts += 1;

    await post.save();

    res.json(post.hearts);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route  POST api/posts/comment/:id
// @desc   Add a coment on a post

router.post(
  "/comment/:id",
  [check("text", "Text is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
      };

      post.comments.unshift(newComment);

      post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/posts/comment/like/:id/:comment_id
// @desc   Add a like to a comment

router.put("/comment/like/:id/:comment_id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    comment.likes += 1;

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

module.exports = router;
