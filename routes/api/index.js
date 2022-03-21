
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
    // req.body is the array of object snippet of the json that exists in this file
    // we deconstruct the array of objects 
    const {title, text} = req.body;
    // add the new note to the db var
    // write the db var to db.json
    //  constructed in to new note
    const newNote = {
     title,
     text,
    //  add a randome id. can be done with a npm module as well
     id: Math.floor(Math.random() * 10000)
 }
//  updated  the array 
  db.push(newNote);
//   sending the array back to the json
fs.writeFileSync("db/db.json", JSON.stringify(db))
// response jusst as best practice
res.json(db);

 });


//  //  delete route
// router.delete('/notes/:id', (req, res) => {
//     const noteId = req.params
//     // ***** this variable is probably causing the problem because its not targeting an array
//     const notes = req.body;
//     console.log(notes);
//     // gets id param form browser
//       // filter method for arrays 
//       const resultNote = notes.filter((note) => note.id === noteId);
//     // update the array
//     db.push(resultNote);
//     // then we updadate by using fs writefile
//     fs.writeFileSync('db/db.json',JSON.stringify(db))
// });

 router.delete('/notes/:id', (req, res) => {
  // deconstructs the obljecy to get the id attribute 
  const { id } = req.params;
  // holds the json object 
  const notes = db;
// gets the index of the element in array with the id selected and compares the value because its a string vs int we use == otherwise pars it first to use ===
   const delNote = notes.findIndex(note => note.id == id);
  //  deletes note from jason array
   notes.splice(delNote, 1);
  //  sends the request to server
  return res.send();
 });

module.exports = router;