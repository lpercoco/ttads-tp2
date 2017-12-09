var mongoose =require('mongoose');

var matchEventSchema= new mongoose.Schema({
  evento: {type: mongoose.Schema.Types.ObjectId, ref: 'event', required: true},
  team: {type: mongoose.Schema.Types.ObjectId, ref: 'team', required: true},
  time: {type: Date,required: true},
  player: {type: String},
  observation: {type: String}
},{timestamps:true});

mongoose.model('matchEvent', matchEventSchema);
