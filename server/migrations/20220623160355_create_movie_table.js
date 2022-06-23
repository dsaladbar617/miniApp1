/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('movie', table => {
    table.increments();
    table.string('title', 255);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function down(knex) {
  return knex.schema.dropTableIfExists('movie');
};
