const express = require("express");

const projects = require("./data-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProject().then((projects) => {
    res.status(200).json(projects);
  });
});

router.post("/", (req, res) => {
  projects.addProject().then((projects) => {
    res.status(200).json(projects);
  });
});

module.exports = router;
