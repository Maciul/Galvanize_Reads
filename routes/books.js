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

module.exports = router;
