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


module.exports = router;
