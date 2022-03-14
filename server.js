// this file sets up the server

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// middle wear that parse incominng string or array data
app.use(express.urlencoded({ extended: true })); 
// parse incoming JSON data
app.use(express.json());
// allows public files to be avilable without endpoin 
app.use(express.static('./Develop/public'));
// route for front end to make requests from(endpoint)

// use api routes when making request
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// server port and server actively listening for requests
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})







