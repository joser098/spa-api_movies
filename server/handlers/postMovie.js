const addMovie = require('../contollers/addMovie');

const postMovie = async (req,res) => {
    try {
        const { title, synopsis, author, release, actors, collected, image, created_at } = req.body;
        
        const newMovie = await addMovie(title, synopsis, author, release, actors, collected, image, created_at);

        res.status(200).json({ message: newMovie});
    } catch (error) {
        res.status(500).json({ message: error })
    }
};

module.exports = postMovie;