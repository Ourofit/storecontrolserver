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

// Insert Per Day Sales Activity
router.put("/day", (req, res) => {
    db.Sales_Activity.update(req.body, {
        where: {
            Sales_id: req.body.Sales_id,
        },
    }).then((sales) => res.send(sales));
});

module.exports = router;
 