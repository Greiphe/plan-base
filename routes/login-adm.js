var express = require('express');
var router = express.Router();

/* GET adm-login. */
router.get('/', function(req, res) {
  res.render('adm/login');
});

module.exports = router;