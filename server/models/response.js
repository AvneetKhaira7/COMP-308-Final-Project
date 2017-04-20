// require modules for our User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema; //alias for mongoose Schema
let passportLocalMongoose = require('passport-local-mongoose');

let ResponseSchema = new Schema({
  surveyId: {
    type: Schema.Types.ObjectId,
    default: null,
    trim: true ,
    required :true  
  },
  surveyName: {
    type: String,
    default: '',
    trim: true    
  },
   question1: {
    type: String,
    default: '',
    trim: true
  },
  answer1: {
    type: String,
    default: '',
    trim: true    
  }, 
  question2: {
    type: String,
    default: '',
    trim: true
  },
  answer2: {
    type: String,
    default: '',
    trim: true    
  }, 
  question3: {
    type: String,
    default: '',
    trim: true
  },
  answer3: {
    type: String,
    default: '',
    trim: true    
  }, 
  question4: {
    type: String,
    default: '',
    trim: true
  },
  answer4: {
    type: String,
    default: '',
    trim: true    
  }, 
  question5: {
    type: String,
    default: '',
    trim: true
  },
  answer5: {
    type: String,
    default: '',
    trim: true    
  }, 
  
responseUser:{
 type: Schema.Types.ObjectId, 
 ref: 'users', default:null
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

//let options = ({missingDescriptionError: "Please enter all data"});

//SurveySchema.plugin(passportLocalMongoose, options);

exports.Response = mongoose.model('response', ResponseSchema);
