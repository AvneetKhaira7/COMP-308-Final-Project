// modules required for routing
let express = require('express');
let router = express.Router();

// require the survey controller
let surveyController = require('../controllers/survey');
// require the response controller
let responseController = require('../controllers/response');

// GET /login - render the created survey
router.get('/view', (req, res, next)=>{
  responseController.DisplayViewResponse(req, res);
  // POST 
});


router.get('/allsurveys', (req, res, next)=>{
surveyController.ReadSurveyListByUserId(req,res);
});






// GET /login - render the created survey
router.get('/analysis', (req, res, next)=>{
  responseController.DisplayResponseAnalysis(req, res);
  // POST 
});


module.exports = router;