/**
 * File name: sresponse.js
 * Authors:  Taranjit Kaur 
 *           Avneet Kaur
 * Web link: https://comp308finalprojectgroup8.herokuapp.com/
 * Description: Defines routes.
 */


let express = require('express');
let router = express.Router();
let authController = require('../controllers/users');
let reqAuth = authController.RequireAuth;
// require the survey controller
let surveyController = require('../controllers/survey');
// require the response controller
let responseController = require('../controllers/response');

// GET /login - render the created survey
router.get('/view', reqAuth, (req, res, next)=>{
  responseController.DisplayViewResponse(req, res);
  // POST 
});



router.get('/allsurveys', reqAuth, (req, res, next)=>{
surveyController.ReadSurveyListByUserId(req,res);
});

router.get('/view/:id', reqAuth, (req, res, next) => {   
    responseController.DisplayViewResponse(req, res);
})

//export data to csv
router.get('/view/:id/export.csv', reqAuth, (req, res, next)=>{
  responseController.exportd(req, res);
  // POST 
});
router.get('/analysis', reqAuth, (req, res, next)=>{
 // responseController.DisplayResponseAnalysis(req, res);
  surveyController.ReadSurveyListByUserIdRating(req, res);
 
  // POST 
});
// GET /login - render the created survey
router.get('/analysis/:id', reqAuth, (req, res, next)=>{
 // responseController.DisplayResponseAnalysis(req, res);
  responseController.GraphAnalysisForRating(req, res);
 
  // POST 
});
router.get('/analysis2/:id', reqAuth, (req, res, next)=>{
 // responseController.DisplayResponseAnalysis(req, res);
  responseController.AverageRating(req, res);
 
  // POST 
});


module.exports = router;