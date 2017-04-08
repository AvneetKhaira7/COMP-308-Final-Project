// require modules for our User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema; //alias for mongoose Schema
let passportLocalMongoose = require('passport-local-mongoose');

let answersSchema = new Schema({
  surveyId: {
    type: String,
    default: '',
    trim: true    
  },
   answer_Description: {
    type: String,
    default: '',
    trim: true,
    required: 'answer is required'
  },
  answer_UserId: {
    type: String,
    default: '',
    trim: true    
  },
answer_type: {
    type: int,
    default: 0,
    trim: true    
  }, 
  answer_OptionsCount: {
    type: int,
    default: 0   
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
  collection: "answers"
});

let options = ({missingDescriptionError: "Please enter answer"});

SurveySchema.plugin(passportLocalMongoose, options);

exports.answers = mongoose.model('answers', answersSchema);
