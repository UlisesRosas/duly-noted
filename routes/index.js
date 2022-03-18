// this file has routes to return html files 
// path module to work with directories and files paths
const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes)

// connects the front end
router.get('/notes', (req, res) => {
    // the response gets sent to client instead of json object
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// must be last routew because using * wild card or will take presidence
// also catches any non existing routes and takes you to the main menu
router.get('*', (req,res) => {
    // sends response to client instead og json object
    res.sendFile(path.join(__dirname,'../public/index.html'))
});
module.exports = router;




// inport routes in to an index file then export it using module.exports because node
// will look for the modules in an index file