// modules required for routing
let express = require('express');
let router = express.Router();

// require the users controller
let usersController = require('../controllers/users');

// GET /login - render the login view
router.get('/login', (req, res, next)=>{
  usersController.DisplayLogin(req, res);
  // POST /login - process the login attempt
}).post('/login', usersController.ProcessLogin());

// GET /register - render the registration view
router.get('/register', (req, res, next)=>{
   usersController.DisplayRegistration(req, res);
}).post('/register', (req, res, next)=>{
  // POST / register - process the registration submission
  usersController.ProcessRegistration(req, res);
});

// GET /logout - process the logout request
router.get('/logout', (req, res, next)=>{
  usersController.ProcessLogout(req, res);
});

module.exports = router;
