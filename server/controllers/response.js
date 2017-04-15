let mongoose = require('mongoose');

// define the survey model
let response = require('../models/response').Response;


// // Read and display the Survey List
// module.exports.ReadSurveyList = (req, res) => {
//   // find all surveys in the surveys collection
//   survey.find( (err, surveys) => {
//     if (err) {
//       return console.error(err);
//     }
//     else {
//       res.render('survey/index', {
//         title: 'Surveys',
//         surveys: surveys,
//         displayName: req.user.displayName
//       });
//     }
//   });
// }


module.exports.CreateResponse = (req, res) => {
  let newSurvey = survey({
      "surveyId":req.param.id,
      "question1": req.body.q1,
      "question2": req.body.q2,
      "question3": req.body.q3,
      "question4":req.body.q4,
      "question5":req.body.q5,
      "answer1":req.body.a1,
      "answer2":req.body.a2,
      "answer3":req.body.a3,
      "answer4":req.body.a4,
      "answer5":req.body.a5
      


     
    });

    survey.create(newSurvey, (err, newSurvey)=> {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        console.log("created")
        res.redirect('/surveys/home');
      }
    });
}



