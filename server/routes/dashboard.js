// modules required for routing
let express = require('express');
let router = express.Router();

// require the dashboard controller
let dashboardController = require('../controllers/dashboard');
let authController = require('../controllers/users');
let reqAuth = authController.RequireAuth;


router.get('/', reqAuth, (req, res,  next)=>{
  dashboardController.ReadActiveSurveyList(req, res);
  
})

router.get('/anonymous', (req, res, next)=>{
  dashboardController.ReadSurveyListAnonymous(req, res);
  
})


module.exports = router;
