const express = require("express");
const router = express.Router();
const db = require("../models");

// All users register
router.get("/", (req, res) => {
    db.Register.findAll().then((users) => res.send(users));
});

// Insert new client register
router.post("/new", (req, res) => {
    db.Register.create(req.body).then((user) => res.send(user));
});

// Delete Category
router.delete("/delete/:id", (req, res) => {
    db.Categories.destroy({
        where: {
            Category_id: req.params.id,
        },
    }).then(() => res.send("success"));
});


module.exports = router;
 