// const router = require('express').Router();
// require the object 
const { db } = require('../../Develop/db/db');

const router = require('express').Router();

// route to get all notes
router.get('/', (req, res) => {
    if(res) {
        // responds with json file in json form
        res.json(db);
    } else {
        res.send(404);
    }  
});

// route to add anew note 
router.post('/', (req, res) => {
    const {title, text} = req.body;
    // add the new note to the db var
    // write the db var to db.json
 });


module.exports = router;