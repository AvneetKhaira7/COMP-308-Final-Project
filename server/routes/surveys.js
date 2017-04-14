// modules required for routing
let express = require('express');
let router = express.Router();

// require the users controller
let surveyController = require('../controllers/survey');

// GET /login - render the home view
router.get('/home', (req, res, next)=>{
  surveyController.DisplayAdd(req, res);
  
})


// GET /login - render the login view
router.get('/created', (req, res, next)=>{
  surveyController.DisplayCreated(req, res);
  // POST / 
})

// GET /login - render the created survey
router.get('/shortanswers', (req, res, next)=>{
  surveyController.DisplayShortAnswers(req, res);
  // POST 
})

// GET /login - render the created survey
router.get('/ratinganswers', (req, res, next)=>{
  surveyController.DisplayRatingAnswers(req, res);
  // POST 
})


module.exports = router;
