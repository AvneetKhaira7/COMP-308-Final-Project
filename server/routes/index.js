// modules required for routing
let express = require('express');
let router = express.Router();

// require the index controller
let indexController = require('../controllers/index');
let userController = require('../controllers/users');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  indexController.DisplayHome(req, res);
});

/* GET login page. */
router.get('/login', (req, res, next) => {
  userController.DisplayLogin(req, res);
});


router.get('/contactUs', (req, res, next) => {
  indexController.DisplayContactUs(req, res);
});

module.exports = router;
