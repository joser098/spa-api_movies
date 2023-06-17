const Movie = require('../models/Movie');

const getById =  async (id) => {
    try {
        if(!id) return "You should provide an id"
        const movie = await Movie.findById(id).exec()
        
        if(!movie) return `There is not movie with id: ${id}`
        return movie;
    } catch (error) {
        throw new Error(error)
    }
};


module.exports = getById;