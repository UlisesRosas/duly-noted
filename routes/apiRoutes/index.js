// const router = require('express').Router();

const noteRoutes = require('./notesRoute.js');
const router = require('express').Router();

router.use('/notes', noteRoutes);


module.exports = router;
// inport routes in to an index file then export it using module.exports because node
// will look for the modules in an index file