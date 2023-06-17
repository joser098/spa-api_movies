const getAllMovies = require('../contollers/getAllMovies') 

const getMovies = async (req, res) => {
    try {
        const allMovies = await getAllMovies();

        res.status(200).json({ message: allMovies });
    } catch (error) {
        res.status(500).json({ message: error })
    }
};

module.exports = getMovies;