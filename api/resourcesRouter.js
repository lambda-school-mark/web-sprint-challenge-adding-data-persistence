const express = require("express");

const data = require("./data-model");

const router = express.Router();

router.get("/", (req, res) => {
  data.getResources().then((resources) => {
    res.status(200).json(resources);
  });
});

router.post("/", (req, res) => {
  data.addResource().then((resources) => {
    res.status(200).json(resources);
  });
});

module.exports = router;
