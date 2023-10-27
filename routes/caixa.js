var express = require('express');
var router = express.Router();

/* GET caixa. */
router.get('/', function(req, res) {
  res.render('tables/caixa');
});

module.exports = router;