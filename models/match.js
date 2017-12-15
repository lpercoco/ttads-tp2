var mongoose =require('mongoose');

var matchSchema= new mongoose.Schema({
  localTeam: {type: mongoose.Schema.Types.ObjectId, ref: 'team', required: true},
  visitorTeam: {type: mongoose.Schema.Types.ObjectId, ref: 'team', required: true},
  events:[{type: mongoose.Schema.Types.ObjectId, ref: 'event'}],
  beginOfMatch: {type: Date},
  endOfMatch: {type: Date},
},{timestamps:true, usePushEach: true });

mongoose.model('match', matchSchema);
