var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  res.render('home/welcome');
});
router.get('/about', function(req, res) {
    // res.render('index', { title: 'Express' });
    res.render('home/about');
});

module.exports = router;
