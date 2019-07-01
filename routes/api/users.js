const express = require("express");

const router = express.Router();

// @route   GET api/users/test
// @des     test users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "users" }));

module.exports = router;
