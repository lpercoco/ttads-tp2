var mongoose =require('mongoose');

var eventTypeSchema= new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true}
},{timestamps:true, usePushEach: true});

mongoose.model('eventType', eventTypeSchema);
