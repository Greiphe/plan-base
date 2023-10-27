var express = require('express');
var router = express.Router();

/* GET tables. */
router.get('/', function(req, res) {
  res.render('tables/index');
});

module.exports = router;