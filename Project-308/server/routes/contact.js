// modules required for routing
let express = require('express');
let router = express.Router();

// require the users controller
let contactController = require('../controllers/contact');

// GET /login - render the login view
router.get('/contact', (req, res, next)=>{
  contactController.DisplayContacts(req, res);
  // POST /login - process the login attempt
})


module.exports = router;
