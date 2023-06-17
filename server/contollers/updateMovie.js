const Movie = require('../models/Movie');

const updateMovie = async (data) => {
    try {
        await Movie.findByIdAndUpdate(data.id, { $set: data})
        
        return 'Movie updated'
    } catch (error) {
        throw new Error(error)
    }

};


module.exports = updateMovie;

