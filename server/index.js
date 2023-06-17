require('dotenv').config();

//DB
require('./db')
const express = require('express');
const app = express();

const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const routes = require('./routes/movies')



//Middlewares
app.use(morgan('dev'));
const storage =  multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname ))
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.use('/api/movies',routes);

// StaticFiles
// app.use(express.static(path.join(__dirname, 'public')));


// Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`)
});

module.exports = app;