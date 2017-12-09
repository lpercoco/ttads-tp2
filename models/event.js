var mongoose =require('mongoose');

var eventSchema= new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true, unique: true}
},{timestamps:true});

mongoose.model('event', eventSchema);
