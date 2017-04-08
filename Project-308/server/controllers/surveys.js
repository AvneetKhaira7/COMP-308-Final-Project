let mongoose = require('mongoose');
let passport = require('passport');

// define the user model
let UserModel = require('../models/users');
let User = UserModel.User; // alias for User Model - User object

module.exports.DisplaySurvey = (req, res) => {
// check to see if the user is not already logged in
  if(!req.user) {
    // render the createsurvey page
    res.render('content/displaysurvey', {
      title: "Surveys",
      games: '',
      messages: req.flash('error'),
      displayName: req.user ? req.user.displayName : ''
    });
    return;
   } else {
     return res.redirect('/dashboard'); // redirect to dashboard
   }
}

// module.exports.CreateSurvey = (req, res) => {
// // check to see if the user is not already logged in
//   if(!req.user) {
//     // render the createsurvey page
//     res.render('content/createsurvey', {
//       title: "Create Survey",
//       games: '',
//       messages: req.flash('error'),
//       displayName: req.user ? req.user.displayName : ''
//     });
//     return;
//    } else {
//      return res.redirect('/dashboard'); // redirect to dashboard
//    }
// }
// Create a new survey and insert it into the db

/*
* edit ids here
*/
module.exports.CreateSurvey = (req, res) => {
  let newSurvey = survey({
      "surveyName": req.body.name,
      "survey_Description": req.body.cost,
      "survey_UserId": req.body.rating
    });

    survey.create(newSurvey, (err, survey) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        res.redirect('/surveys');
      }
    });
}