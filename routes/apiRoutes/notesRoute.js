// const router = require('express').Router();
// // require the object 
// const { db } = requires('../../Develop/db/db');

const noteRoutes = require('./notesRoute.js');
const router = require('express').Router();

router.use('/notes', noteRoutes);

module.exports = router;

// route to get all notes
router.get('/db', (req, res) => {
    if(res) {
        // responds with json file in json form
        res.json(db);
    } else {
        res.send(404);
    }  
});

// route to add anew note 
router.post('/db', (req, res) => {
    const {newNote} = req.body;
 });


module.exports = router;