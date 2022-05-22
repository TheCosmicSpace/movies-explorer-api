const movieRouter = require('express').Router();
const { createMove, getMovie, deleteMovieById } = require('../controllers/movies');

movieRouter.post('/movies', createMove);
movieRouter.get('/movies', getMovie);
movieRouter.delete('/movies/:id', deleteMovieById);

module.exports = movieRouter;
