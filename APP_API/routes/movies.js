const express = require('express');
const ctrlMovie = require('../controllers/movie');
const router = express.Router();


// movies
router
.route('/movies')
.get(ctrlMovie.getmovies)
.post(ctrlMovie.createmovie);


router
.route('/movies/:movieid')
.get(ctrlMovie.getSinglemovie)
.put(ctrlMovie.updatemovie)
.delete(ctrlMovie.deletemovie);


module.exports = router;
