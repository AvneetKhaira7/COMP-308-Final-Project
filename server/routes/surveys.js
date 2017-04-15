// modules required for routing
let express = require('express');
let router = express.Router();

// require the survey controller
let surveyController = require('../controllers/survey');
let responseController = require('../controllers/response');

// GET /login - render the home view
router.get('/home', (req, res, next)=>{
  surveyController.DisplayAdd(req, res);
  
}).post('/home', (req, res, next) => { 
   surveyController.CreateSurvey(req,res);
});


// GET /login - render the login view
router.get('/created', (req, res, next)=>{
  surveyController.DisplayCreated(req, res);
  // POST / 
})



router.get('/details_short/:id', (req, res, next) => {
   
    surveyController.TakeShortAnswersSurvey(req, res);
}).post('/details_short/:id', (req, res, next) => { 
   responseController.CreateResponseForShortAnswers(req,res);
});

router.get('/details_rating/:id', (req, res, next) => {
   
    surveyController.TakeRatingSurvey(req, res);
}).post('/details_rating/:id', (req, res, next) => { 
   responseController.CreateResponseForRating(req,res);
});

// GET the Survey Details page in order to submit answers
router.get('/details/:id', (req, res, next) => {
   
    surveyController.TakeSurvey(req, res);
});






// GET /login - render the created survey
router.get('/shortanswers', (req, res, next)=>{
  surveyController.DisplayShortAnswers(req, res);
  // POST 
});

// GET /login - render the created survey
router.get('/ratinganswers', (req, res, next)=>{
  surveyController.DisplayRatingAnswers(req, res);
  // POST 
});


module.exports = router;
