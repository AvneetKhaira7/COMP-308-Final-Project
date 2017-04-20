/**
 * File name: sresponse.js
 * Authors:  Taranjit Kaur 
 *           Avneet Kaur
 * Web link: https://comp308finalprojectgroup8.herokuapp.com/
 * Description: Defines routes.
 */


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

router.get('/view/:id', (req, res, next) => {   
    responseController.DisplayViewResponse(req, res);
})

//export data to csv
router.get('/view/:id/export.csv',(req, res, next)=>{
  responseController.exportd(req, res);
  // POST 
});
 
// GET /login - render the created survey
router.get('/analysis', (req, res, next)=>{
  responseController.DisplayResponseAnalysis(req, res);
  // POST 
});


module.exports = router;