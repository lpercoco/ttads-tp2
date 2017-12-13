var mongoose =require('mongoose');

var eventSchema= new mongoose.Schema({
  eventType: {type: mongoose.Schema.Types.ObjectId, ref: 'eventType', required: true},
  team: {type: mongoose.Schema.Types.ObjectId, ref: 'team', required: true},
  time: {type: Date,required: true},
  player: {type: String},
  observation: {type: String}
},{timestamps:true});

mongoose.model('event', eventSchema);
