const getById = require('../contollers/getById');

const getMovieById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id)
        const movieFound = await getById(id);

        res.status(200).json({ message: movieFound });
    } catch (error) {
        next(error)
    }
};


module.exports = getMovieById;