const Movie = require('../models/Movie');

const removeMovie = async (id) => {
    if(!id) return 'You should provide a movie id';
    
    await Movie.findByIdAndRemove(id)

    return 'Movie deleted successfully'
};

module.exports = removeMovie;