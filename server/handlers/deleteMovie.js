const deleteMovive = (req, res) => {
    try {
        const { id } = req.params;

        res.send(`Delete Movie ${id}`)
    } catch (error) {
        console.log(error)
    }
};


module.exports = deleteMovive;