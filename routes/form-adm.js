var express = require('express');
var router = express.Router();

/* GET adm-cadastro-form. */
router.get('/', function(req, res) {
  res.render('adm/cadastro/form');
});

module.exports = router;