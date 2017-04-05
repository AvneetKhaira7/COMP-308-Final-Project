// require modules for our User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema; //alias for mongoose Schema
let passportLocalMongoose = require('passport-local-mongoose');

let SurveySchema = new Schema({
  surveyName: {
    type: String,
    default: '',
    trim: true,
    required: 'surveyName is required'
  },
   survey_Description: {
    type: String,
    default: '',
    trim: true,
    required: 'survey description is required'
  },
  survey_UserId: {
    type: String,
    default: '',
    trim: true    
  },
survey_AvailableOn: {
    type: Date,
    default: Date.now,
    trim: true    
  }, 
  survey_ExpiresOn: {
    type: Date,
    default: Date.now,
    trim: true    
  }, 
  survey_status:{
type:boolean,
default:false
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
  collection: "surveys"
});

let options = ({missingDescriptionError: "Please enter description"});

SurveySchema.plugin(passportLocalMongoose, options);

exports.Survey = mongoose.model('survey', SurveySchema);
