var express = require('express');
var router = express.Router();
var api = require('../db/api');

// Show list of books
router.get('/', function(req, res, next) {
  api.listAuthors().then(function(authors) {
    res.render('list-books', {authors: authors});
  });
});
