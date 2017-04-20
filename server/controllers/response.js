let mongoose = require('mongoose');

// define the response model
let response = require('../models/response').Response;

let json2csv = require('json2csv');

// displays the response page
module.exports.DisplayViewResponse = (req, res) => {
 response.find({"surveyId" : mongoose.Types.ObjectId(req.params.id) } ,  (err, response) => {
    if (err) {
      return console.error(err);
    }
    else {
       res.render('sresponse/view', {
        title: 'Response',        
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
      "surveyId":req.body.id,
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
      "surveyId":req.body.id,
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

// displays the response page
module.exports.ExportDataCSV = (req, res) => {
 response.find({"surveyId" : mongoose.Types.ObjectId('58f23741386c491a14fa4137') } ,  (err, response) => {
    if (err) {
      return console.error(err);
    }
    else {
       // response csv
       var csv = json2csv({ data: response, fields: ['answer1','answer2','answer3','answer4','answer5' ]}); 
fs.writeFile('file.csv', csv, function(err) {
  if (err) throw err;
  else{
  res.attachment('filename.csv');
res.status(200).send(data);
  console.log('file saved');
  }
});
    }
  });
  

}
