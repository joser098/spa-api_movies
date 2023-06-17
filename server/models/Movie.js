const { Schema, model} = require('mongoose');

const movieSchema = new Schema({
    title: String,
    synopsis: String,
    author: String,
    release: Date,
    actors: [String],
    collected: Number,
    image: String,
    created_at: Date
});

movieSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Movie = model('Movie', movieSchema)

module.exports = Movie;
