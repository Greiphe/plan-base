var express = require('express');
var router = express.Router();

/* GET previsão. */
router.get('/', function(req, res) {
  res.render('tables/previsoes');
});

module.exports = router;