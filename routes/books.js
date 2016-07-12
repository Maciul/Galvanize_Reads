var express = require('express');
var router = express.Router();
var api = require('../db/api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  api.listBooks().then(function(books) {
    res.render('list-books', {books: books});
  });
});

router.get('/add', function(req, res, next) {
  res.render('add-book');
});

router.post('/', function(request, response, next) {
  var book = {
    title: request.body.title,
    genre: request.body.genre,
    description: request.body.description,
    coverURL: request.body.coverURL
  };
  api.addBook(book).then(function(book) {
    response.redirect('/books');
  });
});

module.exports = router;
