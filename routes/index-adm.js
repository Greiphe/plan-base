var express = require('express');
var router = express.Router();

/* GET adm-cadastro-index. */
router.get('/', function(req, res) {
  res.render('adm/cadastro/index');
});

module.exports = router;