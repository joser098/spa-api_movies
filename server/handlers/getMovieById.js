const getMovieById = (req, res) => {
    try {
        const { id } = req.params;

        res.send(`Get movie by id: ${id}`)
    } catch (error) {
        console.log(error)
    }
};


module.exports = getMovieById;