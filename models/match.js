var mongoose =require('mongoose');

var matchSchema= new mongoose.Schema({
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'team' }],
  beginOfMatch: {type: Date},
  endOfMatch: {type: Date}
},{timestamps:true});

mongoose.model('match', matchSchema);
