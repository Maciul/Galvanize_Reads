var express = require('express');
var router = express.Router();
var api = require('../db/api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  api.listBooks().then(function(books) {
    console.log(books);
    res.render('list-books', {books: books});
  });
});

module.exports = router;
