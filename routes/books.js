var express = require('express');
var router = express.Router();
var api = require('../db/api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  api.listBooks().then(function(books) {
    res.render('list-books', {books: books});
  });
});

//ADD Book

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

//DELETE book

router.get('/delete/:id', function(req, res, next) {
  api.getBook(req.params.id).then(function(book) {
  res.render('delete-book', {book: book});
  });
});

router.get('/delete/:id/end', function(req, res, next) {
  api.deleteBook(req.params.id).then(function() {
  res.redirect('/books');
  });
});

//EDIT book

router.get('/edit/:id', function(req, res, next) {
  api.getBook(req.params.id).then(function(book) {
    res.render('edit-book', {book: book});
  });
});

router.post('/edit', function(request, response, next) {
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
