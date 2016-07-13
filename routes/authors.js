var express = require('express');
var router = express.Router();
var api = require('../db/api');

// Show list of books
router.get('/', function(req, res, next) {
  api.listAuthors().then(function(authors) {
    res.render('list-authors', {authors: authors});
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



module.exports = router;
