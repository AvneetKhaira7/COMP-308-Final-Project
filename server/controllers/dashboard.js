let mongoose = require('mongoose');
let passport = require('passport');

// define the user model
let UserModel = require('../models/users');
let User = UserModel.User; // alias for User Model - User object

// define the survey model
let survey = require('../models/survey').Survey;



// Read and display the Survey List
module.exports.ReadSurveyListByUserId = (req, res) => {
  // find all surveys in the surveys collection
  survey.find({"createdBy" : mongoose.Types.ObjectId(req.user ? req.user.id: '') } , (err, surveys) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('content/dashboard', {
        title: 'Dashboard',
        results: surveys,
        displayName:  req.user ? req.user.displayName : ''
      });
    }
  });
}

// Read and display the Survey List
module.exports.ReadActiveSurveyList= (req, res) => {
  // find all surveys in the surveys collection
  survey.find({"survey_active" : Boolean(true) } , (err, surveys) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('content/dashboard', {
        title: 'Dashboard',
        results: surveys,
        displayName:  req.user ? req.user.displayName : ''
      });
    }
  });
}


// Read and display the Survey List
module.exports.ReadSurveyListAnonymous = (req, res) => {
  // find all surveys in the surveys collection
  survey.find({"survey_availableForAnonymous" : Boolean(true) ,"survey_active" : Boolean(true)} , (err, surveys) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('content/guestuser', {
        title: 'Dashboard',
        results: surveys        
      });
    }
  });
}
