// require modules for our User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema; //alias for mongoose Schema
let passportLocalMongoose = require('passport-local-mongoose');

let QuestionsSchema = new Schema({
  surveyId: {
    type: String,
    default: '',
    trim: true    
  },
  question_UserId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
   question_Description: {
    type: String,
    default: '',
    trim: true,
    required: 'question description is required'
  },
  // question_UserId: {
  //   type: String,
  //   default: '',
  //   trim: true    
  // },
question_type: {
    type: int,
    default: 0,
    trim: true    
  }, 
  question_OptionsCount: {
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
  collection: "questions"
});

let options = ({missingDescriptionError: "Please enter question"});

QuestionsSchema.plugin(passportLocalMongoose, options);

exports.Questions = mongoose.model('questions', QuestionsSchema);
