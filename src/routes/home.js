const HomeController = require('../controllers').HomeController
const express = require('express');
const router = express.Router();

const home = new HomeController('home')

/* GET home page. */
router.get('/', home.main);

module.exports = router;
