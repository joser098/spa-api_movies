const updateMovie = require("../contollers/updateMovie");

const putMovie = async (req, res) => {
    try {
        const data = req.body;

        const movie = await updateMovie(data)

        res.status(200).json({ message: movie });
    } catch (error) {
        res.status(500).json({ error: error });        
    }
};

module.exports = putMovie;