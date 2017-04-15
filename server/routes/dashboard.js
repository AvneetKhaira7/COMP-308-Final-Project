// modules required for routing
let express = require('express');
let router = express.Router();

// require the dashboard controller
let dashboardController = require('../controllers/dashboard');


router.get('/', (req, res, next)=>{
  dashboardController.ReadSurveyListByUserId(req, res);
  
})


module.exports = router;
