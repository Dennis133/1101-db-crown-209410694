var express = require('express');
var router = express.Router();
const apiCrown2Controller_94 = require('../controllers/apiCrown2Controller_94');

/* GET home page. */
router.get('/category_94', apiCrown2Controller_94.getCategories);

module.exports = router;
