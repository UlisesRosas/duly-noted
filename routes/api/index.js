
// inport routes in to an index file then export it using module.exports because node
// will look for the modules in an index file

// const router = require('express').Router();
// require the object 
const { match } = require('assert');
const fs = require('fs');
const db = require('../../db/db.json');

const router = require('express').Router();

// route to get all notes
router.get('/notes', (req, res) => {
        // responds with json file in json form
        res.json(db);
        // res.send(404);
});

// route to add anew note 
router.post('/notes', (req, res) => {
    console.log(req.body);
    const {title, text} = req.body;
    // add the new note to the db var
    // write the db var to db.json
//  constructed in to new note
    const newNote = {
     title,
     text,
     id: Math.floor(Math.random() * 10000)
 }
//  updated  the array 
  db.push(newNote);
//   sending the array back to the json
fs.writeFileSync("db/db.json", JSON.stringify(db))
res.json(db);

 });

//  felete route
router.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    // filter method for arrays 
    // then we updadate by using fs writefile

})


module.exports = router;