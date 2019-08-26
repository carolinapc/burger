var express = require("express");
var burger = require("../models/burger");

var router = express.router();

//select all
router.get("/", (req, res) => {
    burger.all(data => {
        res.render("index", { burger: data });
    });
});

//creates new burger
router.post("/api/burger", (req, res) => {
    burger.create(req.body.name, result => {
        res.json({ id: result.insertedId });
    });
});

//devour an burger
router.put("/api/burger", (req, res) => {
    burger.devour(req.body.id, result => {
        if (result.changedRows === 0) {
            res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

