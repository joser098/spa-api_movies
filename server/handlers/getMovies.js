const getMovies = (req, res) => {
    try {
        res.send('get movies')
    } catch (error) {
        console.log(error)
    }
};

module.exports = getMovies;