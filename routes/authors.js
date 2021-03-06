var express = require('express');
var router = express.Router();
var api = require('../db/api');

// Show list of books
router.get('/', function(req, res, next) {
  api.listAuthors().then(function(authors) {
    res.render('list-authors', {authors: authors});
  });
});

// Detail
router.get('/detail/:id', function(req, res, next) {
  api.getAuthor(req.params.id).then(function(author) {
  res.render('detail-author', {author: author});
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
  api.getAuthor(req.params.id).then(function(author) {
  res.render('delete-author', {author: author});
  });
});

router.get('/delete/:id/end', function(req, res, next) {
  api.deleteAuthor(req.params.id).then(function() {
  res.redirect('/authors');
  });
});

//EDIT book

router.get('/edit/:id', function(req, res, next) {
  api.getAuthor(req.params.id).then(function(author) {
    res.render('edit-author', {author: author});
  });
});

router.post('/edit/:id', function(request, response, next) {
  var author = {
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    bio: request.body.bio,
    portrait: request.body.portrait
  };
  api.editAuthor(request.params.id, author).then(function() {
    response.redirect('/authors');
  });
});

module.exports = router;
