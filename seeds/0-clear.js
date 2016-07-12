
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE book, author RESTART IDENTITY CASCADE;');
};
