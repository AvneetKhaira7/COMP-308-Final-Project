let mongoose = require('mongoose');

// define the survey model
let survey = require('../models/survey').Survey;


// Read and display the Survey List
module.exports.ReadSurveyList = (req, res) => {
  // find all surveys in the surveys collection
  survey.find( (err, surveys) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('survey/index', {
        title: 'Surveys',
        surveys: surveys,
        displayName: req.user.displayName
      });
    }
  });
}

// Read and display the Survey List
module.exports.ReadSurveyListByUserId = (req, res) => {
  // find all surveys in the surveys collection
  survey.find({"createdBy" : mongoose.Types.ObjectId(req.user ? req.user.id: '') } , (err, surveys) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('sresponse/allsurveys', {
        title: 'Surveys',
        surveys: surveys,
        displayName: req.user.displayName
      });
    }
  });
}

// displays the Details page - allowing users to add a new Survey
module.exports.DisplayAdd = (req, res) => {
  res.render('survey/index', {
    title: "Create Survey",
    surveys: '',
    displayName: req.user ? req.user.displayName : ''
  });
}

// displays the create from scratch page - allowing users to add a new Survey
module.exports.DisplayCreated = (req, res) => {
  survey.find(function (err, survey) {
        if (err) {
            return console.error(err);
        }
        else {
  res.render('content/created', {
    title: "My Survey",
    surveys: survey,
    displayName: req.user ? req.user.displayName : ''  
  });
   }
});
}



// displays the create from scratch page - allowing users to add a new Survey
module.exports.DisplayShortAnswers = (req, res) => {
  res.render('survey/detailshort', {
    title: "Survey Name",
    surveys: '',
    displayName: req.user ? req.user.displayName : ''
  });
}

// displays the create from scratch page - allowing users to add a new Survey
module.exports.DisplayRatingAnswers = (req, res) => {
  res.render('survey/detailrating', {
    title: "Survey Name",
    surveys: '',
    displayName: req.user ? req.user.displayName : ''
  });
}

// displays the create from scratch page - allowing users to add a new Survey
module.exports.DisplayTips = (req, res) => {
  res.render('content/tips', {
    title: "Survey Tips",
    surveys: '',
    displayName: req.user ? req.user.displayName : ''
  });
}


// Displays the short answers Survey to take it

module.exports.TakeShortAnswersSurvey=(req,res) =>
{
   try {
      // get a reference to the id from the url
      let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

        // finding  book by its id
      survey.findById(id, (err, survey) => {
        if(err) {
          console.log(err);
          res.end(error);
        } else {
        res.render('survey/detailshort', {
        title: "Survey Name",
        surveys: survey,
        displayName: req.user ? req.user.displayName : ''
  });
        }
      });
    } catch (err) {
      console.log(err);
    
    }
}
// Displays the rating answers Survey to take it

module.exports.TakeRatingSurvey=(req,res) =>
{
  try {
      // get a reference to the id from the url
      let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

        // finding  book by its id
      survey.findById(id, (err, survey) => {
        if(err) {
          console.log(err);
          res.end(error);
        } else {
        res.render('survey/detailrating', {
        title: "Survey Name",
        surveys: survey,
        displayName: req.user ? req.user.displayName : ''
  });
        }
      });
    } catch (err) {
      console.log(err);
    
    }
}


module.exports.CreateSurvey = (req, res) => {
  let newSurvey = survey({
      "surveyName": req.body.sname,
      "survey_Description": req.body.sdesc,
    //  "createdBy": req.user ? req.user.id : '',// get user id 
      "survey_question1":req.body.q1,
      "survey_question2":req.body.q2,
      "survey_question3":req.body.q3,
      "survey_question4":req.body.q4,
      "survey_question5":req.body.q5,
      "surveyType":req.body.surveytype,
      "survey_active":req.bodyoptradio     
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



