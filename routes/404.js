var express = require('express');
var router = express.Router();

/* GET 404 Error. */
router.get('/', function(req, res) {
  res.render('404/index');
});

module.exports = router;