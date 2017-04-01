// modules required for routing
let express = require('express');
let router = express.Router();

// require the users controller
let dashboardController = require('../controllers/dashboard');

// GET /login - render the login view
router.get('/dashboard', (req, res, next)=>{
  dashboardController.DisplayDashboard(req, res);
  // POST /login - process the login attempt
})


module.exports = router;
