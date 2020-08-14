const express = require("express");

const Tasks = require("./data-model");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTasks().then((task) => {
    res.status(200).json(task);
  });
});

router.post("/", (req, res) => {
  Tasks.addTask(req.body).then((task) => {
    res.status(201).json(task);
  });
});

module.exports = router;
