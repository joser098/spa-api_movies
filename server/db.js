const mongoose = require('mongoose');
const { MONGO_URL } = process.env;


mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,

})
.then(db => console.log('DB is connected'))
.catch(error => console.log(error))