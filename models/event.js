var mongoose =require('mongoose');

var eventSchema= new mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  description{type: String}
},{timestamps:true});

mongoose.model('event', eventSchema);
