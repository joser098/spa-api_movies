const { Router } = require('express');
const router = Router();
const getMovies = require('../handlers/getMovies');
const getMovieById = require('../handlers/getMovieById');
const putMovie = require('../handlers/putMovie');
const postMovie = require ('../handlers/postMovie');
const deleteMovive = require('../handlers/deleteMovie');


router.get('/', getMovies);

router.get('/:id', getMovieById);

router.put('/', putMovie);

router.post('/', postMovie);

router.delete('/:id', deleteMovive);


module.exports = router;