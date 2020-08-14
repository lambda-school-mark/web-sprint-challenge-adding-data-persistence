const express = require("express");

const Resources = require("./data-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.getResources().then((resources) => {
    res.status(200).json(resources);
  });
});

router.post("/", (req, res) => {
  Resources.addResource(req.body).then((resources) => {
    res.status(200).json(resources);
  });
});

module.exports = router;
