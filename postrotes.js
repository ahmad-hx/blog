const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const Post = require("../models/Post");

router.post("/", auth, async (req, res) => {
  const post = await Post.create({
    ...req.body,
    author: req.userId,
  });
  res.json(post);
});

router.get("/", async (req, res) => {
  const posts = await Post.find().populate("author", "name");
  res.json(posts);
});

module.exports = router;