var express = require('express');
var router = express.Router();
const crown2Controller_94 = require('../controllers/crown2Controller_94');

/* GET home page. */
router.get('/', crown2Controller_94.getCategories);

module.exports = router;
