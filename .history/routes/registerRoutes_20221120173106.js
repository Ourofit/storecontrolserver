const express = require("express");
const router = express.Router();
const db = require("../models");

// All Sales Activity Data
router.get("/", (req, res) => {
    db.Register.findAll().then((users) => res.send(users));
});

// Insert Year Sales Activity
router.post("/new", (req, res) => {
    db.Register.create(req.body).then((user) => res.send(user));
});



module.exports = router;
 