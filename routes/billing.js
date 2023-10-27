var express = require('express');
var router = express.Router();

/* GET billing. */
router.get('/', function(req, res) {
  res.render('billing/index');
});

module.exports = router;