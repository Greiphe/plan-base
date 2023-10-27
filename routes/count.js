var express = require('express');
var router = express.Router();

// 'profile/:id'

/* GET profile. */
router.get('/', function(req, res) {
  res.render('profile/index');
});

module.exports = router;
