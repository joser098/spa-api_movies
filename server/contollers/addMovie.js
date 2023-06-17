// const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const addMovie = async (title, synopsis, author, release, actors, collected, image, created_at) => {
    try {
        const newMovie = new Movie({
            title: title,
            synopsis: synopsis,
            author: author,
            release: release,
            actors: actors,
            collected: collected,
            image: image,
            created_at: created_at
        })
    
        await newMovie.save()
    
        return 'Movie saved'  
    } catch (error) {
        throw new Error(error)
    }
};

module.exports = addMovie;
