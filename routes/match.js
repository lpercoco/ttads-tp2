var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var router=require('express').Router();
var Team = mongoose.model('team');
var Match = mongoose.model('match');

//mock data

// var matchOne = new Match({
// id: 1,
// localTeam: {type: mongoose.Schema.Types.ObjectId, ref: 'team', required: true},
// visitorTeam: {type: mongoose.Schema.Types.ObjectId, ref: 'team', required: true},
// events:[{type: mongoose.Schema.Types.ObjectId, ref: 'matchEvent'}],
// beginOfMatch: {type: Date},
// endOfMatch: {type: Date},
// matchOne.save();


//

//get all matchs
router.get('/', (req, res, next) => {
  Match.find({})
  .then(matchs =>{
    if(!matchs.length){ return res.sendStatus(404); }
    return res.json({'matchs': matchs})
  })
  .catch(next);
});

module.exports=router;
