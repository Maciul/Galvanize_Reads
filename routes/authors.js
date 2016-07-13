var express = require('express');
var router = express.Router();
var api = require('../db/api');

// Show list of books
router.get('/', function(req, res, next) {
  api.listAuthors().then(function(authors) {
    res.render('list-authors', {authors: authors});
  });
});

// ADD Book

router.get('/add', function(req, res, next) {
  res.render('add-author');
});

router.post('/', function(request, response, next) {
  var author = {
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    bio: request.body.bio,
    portrait: request.body.portrait
  };
  api.addAuthor(author).then(function(author) {
    response.redirect('/authors');
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
