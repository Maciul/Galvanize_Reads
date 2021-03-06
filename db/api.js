var knex = require('./knex');

module.exports = {

  //Book Functions
  listBooks: function() {
    return knex('book').select();
  },

  addBook: function(book) {
    return knex('book').insert(book);
  },

  getBook: function(id) {
    return knex('book').where({ id: id }).select().first();
  },

  deleteBook: function(id) {
    return knex('book').where({ id: id }).del();
  },

  editBook: function(id, book) {
    return knex('book').where({id: id}).update(book);
  },

  // Cohort functions

  listAuthors: function() {
    return knex('author').select();
  },

  addAuthor: function(author) {
    return knex('author').insert(author);
  },

  getAuthor: function(id) {
    return knex('author').where({ id: id }).select().first();
  },

  deleteAuthor: function(id) {
    return knex('author').where({ id: id }).del();
  },

  editAuthor: function(id, author) {
    return knex('author').where({id: id}).update(author);
  },

  getBookAuthors: function(id) {
    return Promise.all([
    knex('book').select().where({id: id}).first(),
    knex('book').select()
    .join('book_author', 'book.id', 'book_author.book_id').select()
    .join('author', 'author.id', 'book_author.author_id').select('author.id','author.first_name', 'author.last_name')
    .where({id: id})
  ]);
  }
};
