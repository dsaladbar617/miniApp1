/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('movie').del()
  await knex('movie').insert([
    { title: 'Mean Girls'},
    { title: 'Hackers'},
    { title: 'The Grey'},
    { title: 'Sunshine'},
    { title: 'Ex Machina'},
  ]);
};
