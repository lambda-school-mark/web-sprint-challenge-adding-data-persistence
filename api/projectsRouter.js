const express = require("express");

const Projects = require("./data-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProject().then((projects) => {
    res.status(200).json(projects);
  });
});

router.post("/", (req, res) => {
  Projects.addProject(req.body).then((projects) => {
    res.status(200).json(projects);
  });
});

module.exports = router;
