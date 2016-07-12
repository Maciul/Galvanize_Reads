var knex = require('./knex');

module.exports = {

  //Book Functions
  listBooks: function() {
    return knex('book').select();
  },

  addBook: function(staff) {
    return knex('book').insert(staff);
  },

  getStaff: function(id) {
    return knex('staff').where({ id: id }).select().first();
  },

  removeStaff: function(id) {
    return knex('staff').where({ id: id }).del();
  },

  // Cohort functions

  listCohorts: function() {
    return knex('cohort').select();
  },

  addCohorts: function(cohort) {
    return knex('cohort').insert(cohort);
  },

  getCohorts: function(id) {
    return knex('cohort').where({ id: id }).select().first();
  },

  removeCohorts: function(id) {
    return knex('cohort').where({ id: id }).del();
  },
};
