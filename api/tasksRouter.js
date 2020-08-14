const express = require("express");

const tasks = require("./data-model");

const router = express.Router();

router.get("/", (req, res) => {
  tasks.getTasks().then((task) => {
    res.status(200).json(task);
  });
});

router.post("/", (req, res) => {
  tasks.addTask(req.body).then((task) => {
    res.status(201).json(task);
  });
});

module.exports = router;
