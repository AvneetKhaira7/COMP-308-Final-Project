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
  createdBy:{
  type: Schema.Types.ObjectId, 
    ref: 'users'
  },
  surveyType:{
type: String,
default:''
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
  survey_active:{
type:Boolean,
default:true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },

survey_question1:{
  type : String,
  default: '',
  trim: true,
  required: 'Question 1 is required'
},
survey_question2:{
  type : String,
  default: '',
  trim: true,
  required: 'Question 2 is required'
},

survey_question3:{
  type : String,
  default: '',
  trim: true,
  required: 'Question 3 is required'
},
survey_question4:{
  type : String,
  default: '',
  trim: true,
  required: 'Question 4 is required'
},
survey_question5:{
  type : String,
  default: '',
  trim: true,
  required: 'Question 5 is required'
},
survey_availableForAnonymous:{
  type : Boolean, 
  required: 'Select if available for anonymous'
},
responsecount:{
  type : Number,
  default: 0,
  
},

},
{
  collection: "surveys"
});
exports.Survey = mongoose.model('Survey', SurveySchema);

