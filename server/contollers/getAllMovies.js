const Movie  = require('../models/Movie');

const getAllMovies = async () => {
    try {
        const allMovies = await Movie.find({})
        
        return allMovies;
    } catch (error) {
        throw new Error(error);
    }
};


module.exports = getAllMovies;