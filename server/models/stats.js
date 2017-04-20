// require modules for our User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema; //alias for mongoose Schema
let passportLocalMongoose = require('passport-local-mongoose');

let statsSchema = new Schema({
  surveyId: {
    type:  mongoose.Schema.Types.ObjectId, 
    default: '',
    trim: true    
  },
   countAnonymousUsers: {
    type: Number,
    default: 0
    
  },
  countRegisteredUsers: {
    type: Number,
    
    default: 0
  },
  countResponses:{
    type: Number,
default:0
  },
  countlastUpdated:{
type:Date
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
  collection: "stats"
});

exports.statsSchema = mongoose.model('stats', statsSchema);
