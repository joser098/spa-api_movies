const putMovie = (req, res) => {
    try {
        const { id } = req.params;

        res.send(`put Movie ${id}`)
    } catch (error) {
        console.log(error)        
    }
};

module.exports = putMovie;