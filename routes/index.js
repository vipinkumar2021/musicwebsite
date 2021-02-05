var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SaReGaMa Music Academy & GMP Studio', msg: '' });
});

module.exports = router;
