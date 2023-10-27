var express = require('express');
var router = express.Router();

/* GET entradas. */
router.get('/', function(req, res) {
  res.render('tables/entradas');
});

module.exports = router;