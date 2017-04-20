let mongoose = require('mongoose');
// define the response model
let response = require('../models/response').Response;
// displays the response page
module.exports.DisplayViewResponse = (req, res) => {
  response.find({ "surveyId": mongoose.Types.ObjectId(req.params.id) }, (err, response) => {
    if (err) {
      return console.error(err);
    }
    else {

      console.log(response.length+"is number of responses");
       res.render('sresponse/view', {
        title: 'Response',  
        count1:response.length,      
        response: response,

        displayName: req.user ? req.user.displayName : ''
      });
    }
  });


}

// displays the create from scratch page - allowing users to add a new Survey
module.exports.DisplayResponseAnalysis = (req, res) => {
  res.render('content/analysis', {
    title: "Analysis",
    displayName: req.user ? req.user.displayName : ''
  });
}


module.exports.CreateResponseForShortAnswers = (req, res) => {
  let newResponse = response({

      "surveyId":mongoose.Types.ObjectId(req.body.id),
      "surveyName":req.body.surveyn,
      "question1": req.body.q1,
      "question2": req.body.q2,
      "question3": req.body.q3,
      "question4":req.body.q4,
      "question5":req.body.q5,
      "answer1":req.body.a1,
      "answer2":req.body.a2,
      "answer3":req.body.a3,
      "answer4":req.body.a4,
      "answer5":req.body.a5,
      "responseUser": req.user ? req.user.id : null
    });

    response.create(newResponse, (err, newResponse)=> {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        if(req.user){
          console.log("created")
          res.redirect('/surveys/created');          
        }
        else{
          res.redirect('/dashboard/anonymous');
        }
      }
    });

}

module.exports.CreateResponseForRating = (req, res) => {
  let newResponse = response({

      "surveyId":mongoose.Types.ObjectId(req.body.id),
      "surveyName": req.body.surveyn,
      "question1": req.body.q1,
      "question2": req.body.q2,
      "question3": req.body.q3,
      "question4":req.body.q4,
      "question5":req.body.q5,
      "answer1":req.body.optratingq1,
      "answer2":req.body.optratingq2,
      "answer3":req.body.optratingq3,
      "answer4":req.body.optratingq4,
      "answer5":req.body.optratingq5,
      "responseUser": req.user ? req.user.id : null
    });

    response.create(newResponse, (err, newResponse)=> {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
       if(req.user){
          console.log("created")
          res.redirect('/surveys/created');          
        }
        else{
          res.redirect('/dashboard/anonymous');
        }
      }
    });

}
  module.exports.CountResponseForRating = (req, res) => {
    response.find({ "surveyId": mongoose.Types.ObjectId(req.params.id) }, (err, responses) => {

      let answerMap = Array(4).fill().map((x, i) => Array(5).fill().map((a,i)=>0));
      let result = {data: answerMap}

      for (let i = 1; i <= 5; ++i) {
        let property = "answer" + i;
        for (let j = 0; j < responses.length; ++j) {
          let value = responses[j][property];
          answerMap[+value -1][i-1] = (responses.filter((item, idx) => item[property] == value).length)
        }
      }

      if (err) {
        return console.error(err);
      }
      else {
        res.render('content/analysis', {
          title: 'Response',
          response: responses,
          analytics: JSON.stringify(result),
          displayName: req.user ? req.user.displayName : ''
        })
      }
    })
  }


module.exports.getResponseCount=(req,res)=> {
  response.find({"surveyId" : mongoose.Types.ObjectId(req.params.id) }.count() ,  (err, response) => {
    if (err) {
      return console.error(err);
    }
    else {
      console.log(response);
    }
  });
  
}

module.exports.exportd=(req,res)=> {
/* Generate automatic model for processing (A static model should be used) */
 response.find({"surveyId" : mongoose.Types.ObjectId(req.params.id) } ,  (err, responses) => {
    if (err) {
      return console.error(err);
    }
    else {
     let exportData = "";
                            responses.forEach((ress) => {
                                let line = "";
                               // ress.answers.forEach((answer) => {
                                    line += ress.answer1 + ","+ress.answer2+ ","+ress.answer3+ ","+ress.answer4+ ","+ress.answer5;
                               // });
                                line += "\n";
                                exportData += line;
                            });
                            console.log(exportData);
                            res.type("text/csv").send(exportData);
    }
  
});
}

