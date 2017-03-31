let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    name: String,
    rating: Number,
    cost: Number
},
{
  collection: "games"
});

module.exports = mongoose.model('games', gamesSchema);
