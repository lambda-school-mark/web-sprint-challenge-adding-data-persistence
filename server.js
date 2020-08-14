const express = require("express");

const server = express();

const resourcesRouter = require("./api/resourcesRouter");
const projectsRouter = require("./api/projectsRouter");
const tasksRouter = require("./api/tasksRouter");

server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: `Sprint API is UUUUUPPP!!` });
});

module.exports = server;
