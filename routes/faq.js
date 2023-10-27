var express = require('express');
var router = express.Router();

/* GET faq. */
router.get('/', function(req, res) {
  res.render('faq/index');
});

module.exports = router;