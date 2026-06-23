const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const User = require("../models/User");
const Post = require("../models/Post");

router.get("/dashboard", adminAuth, async (req, res) => {
  const users = await User.countDocuments();
  const posts = await Post.countDocuments();

  res.json({
    users,
    posts
  });
});

module.exports = router;