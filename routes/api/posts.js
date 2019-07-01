const express = require("express");

const router = express.Router();

// @route   GET api/posts/test
// @des     test post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "posts" }));

module.exports = router;
