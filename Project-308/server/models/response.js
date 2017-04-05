// require modules for our User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema; //alias for mongoose Schema
let passportLocalMongoose = require('passport-local-mongoose');

let ResponseSchema = new Schema({
  surveyId: {
    type: String,
    default: '',
    trim: true    
  },
   question_Id: {
    type: String,
    default: '',
    trim: true
  },
  answer_Id: {
    type: string,
    default: '',
    trim: true    
  }, 
  question_UserId: {
    type: String,
    default: '',
    trim: true    
  }, 
   created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
},
{
  collection: "response"
});

let options = ({missingDescriptionError: "Please enter all data"});

SurveySchema.plugin(passportLocalMongoose, options);

exports.Response = mongoose.model('response', ResponseSchema);
