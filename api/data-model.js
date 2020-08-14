const db = require("../data/db-config");

module.exports = {
  getResources,
  getResourceById,
  addResource,
  getProject,
  getProjectById,
  addProject,
  getTasks,
  getTaskById,
  addTask,
};

//resources

function getResources() {
  return db("resources");
}

function getResourceById(id) {
  return db("resources").where({ id }).first();
}

function addResource(newResource) {
  return db("resources")
    .insert(newResource)
    .then((id) => getResourceByID(id));
}

//projects

function getProject() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects").where({ id }).first();
}

function addProject(newProject) {
  return db("project")
    .insert(newProject)
    .then((id) => {
      getProjectById(id[0]);
    });
}

//tasks
function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .select(
      "p.id as project id",
      "t.description as task description",
      "t.notes as task notes",
      "t.completed as task completed",
      "p.name as project name",
      "p.description as project description"
    );
}

function getTaskById(id) {
  return db("tasks").where({ id }).first();
}

function addTask() {
  return db("tasks")
    .insert(task)
    .then((id) => getTaskByID(id));
}
