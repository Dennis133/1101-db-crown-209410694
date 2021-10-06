var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_94', { title: 'Express', name: '田晟瑋', id: '209410694' });
});

module.exports = router;
