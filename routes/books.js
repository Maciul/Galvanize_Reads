var express = require('express');
var router = express.Router();
var api = require('../db/api');

// Show list of books
router.get('/', function(req, res, next) {
  api.listBooks().then(function(books) {
    res.render('list-books', {books: books});
  });
});

// Detail
router.get('/detail/:id', function(req, res, next) {
  api.getBook(req.params.id).then(function(book) {
  res.render('detail-book', {book: book});
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

router.post('/edit/:id', function(request, response, next) {
  var book = {
    title: request.body.title,
    genre: request.body.genre,
    description: request.body.description,
    coverURL: request.body.coverURL
  };
  api.editBook(request.params.id, book).then(function() {
    response.redirect('/books');
  });
});

module.exports = router;
