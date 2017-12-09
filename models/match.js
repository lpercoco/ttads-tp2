var mongoose =require('mongoose');

var matchSchema= new mongoose.Schema({
  localTeam: {type: mongoose.Schema.Types.ObjectId, ref: 'team', required: true},
  visitorTeam: {type: mongoose.Schema.Types.ObjectId, ref: 'team', required: true},
  events:[{type: mongoose.Schema.Types.ObjectId, ref: 'matchEvent'}],
  beginOfMatch: {type: Date},
  endOfMatch: {type: Date},
},{timestamps:true});

mongoose.model('match', matchSchema);
