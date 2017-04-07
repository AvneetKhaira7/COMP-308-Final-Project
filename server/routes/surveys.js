// modules required for routing
let express = require('express');
let router = express.Router();

// require the users controller
let surveyController = require('../controllers/survey');

// GET /login - render the login view
router.get('/', (req, res, next)=>{
  surveyController.DisplayAdd(req, res);
  // POST /login - process the login attempt
})


module.exports = router;
