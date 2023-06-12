const postMovie = (req,res) => {
    try {
        res.send('post movie')
    } catch (error) {
        console.log(error)
    }
};

module.exports = postMovie;