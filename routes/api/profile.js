const express = require("express");

const router = express.Router();

// @route   GET api/prfile/test
// @des     test profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "profiles" }));

module.exports = router;
