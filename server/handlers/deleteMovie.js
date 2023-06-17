const removeMovie = require('../contollers/removeMovie');

const deleteMovive = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await removeMovie(id)

        res.status(200).json({ message: movie});
    } catch (error) {
        res.status(500).json({ error: error})
    }
};


module.exports = deleteMovive;