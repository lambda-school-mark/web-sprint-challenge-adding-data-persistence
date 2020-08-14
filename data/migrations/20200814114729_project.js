exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("id");
      table.string("name", 255).notNullable();
      table.text("description");
      table.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("tasks", (table) => {
      table.increments("id");
      table.text("description").notNullable();
      table.text("notes");
      table.boolean("completed").notNullable().defaultTo(false);
      table
        .integer("project_id")
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("resources", (table) => {
      table.increments("id");
      table.string("name", 255).notNullable();
      table.text("description");
    })
    .createTable("project_resources", (table) => {
      table.increments("id");
      table
        .integer("project_id")
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table
        .integer("resource_id")
        .notNullable()
        .references("resources.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
