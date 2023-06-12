const { Schema, model} = require('mongoose');

const MovieSchema = new Schema({
    title: { type: String, required: true },
    synopsis: { type: String, required: true },
    author: { type: String, required: true},
    release: { type: Date, required: true},
    actors: { type:[String], required: true },
    collected: { type: Number, required: true },
    image: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Movie', MovieSchema)
