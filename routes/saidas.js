var express = require('express');
var router = express.Router();

/* GET saidas. */
router.get('/', function(req, res) {
  res.render('tables/saidas');
});

module.exports = router;