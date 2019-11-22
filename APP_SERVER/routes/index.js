var express = require('express');
var router = express.Router();
const ctrlAbout = require("../controllers/about");
const ctrlMovie = require("../controllers/movies");

/* GET home page. */

router.get('/',ctrlMovie.homelist);
router.get('/list',ctrlMovie.listDisplay);
router.get('/about',ctrlAbout.about);

module.exports = router;
