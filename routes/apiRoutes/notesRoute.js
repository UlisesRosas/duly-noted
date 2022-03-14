const router = require('express').Router();
// require the object 
const { db } = requires('../../Develop/db/db');

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