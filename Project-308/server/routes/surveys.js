// modules required for routing
let express = require('express');
let router = express.Router();

// require the users controller
let surveyController = require('../controllers/surveys');

// GET /login - render the login view
router.get('/createsurvey', (req, res, next)=>{
  surveyController.DisplaySurvey(req, res);
  // POST /login - process the login attempt
})


//  GET the create survey  page in order to create a new survey
router.get('/create', usersController.RequireAuth, (req, res, next) => {
  surveyController.DisplayCreate(req, res);
}).post('/create', usersController.RequireAuth, (req, res, next) => {
  // POST process the survey Details page and create a new survey - CREATE
  surveyController.CreateSurvey(req, res);
});


module.exports = router;
