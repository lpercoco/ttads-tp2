var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var EventType = mongoose.model('eventType');
var Event = mongoose.model('event');
var Match = mongoose.model('match');
var Team = mongoose.model('team');

var router=require('express').Router();

Event.collection.dropAllIndexes(function (err, results) {
  // Handle errors
});

EventType.collection.dropAllIndexes(function (err, results) {
  // Handle errors
});

//add event to a match
router.post('/', (req, res) => {

  let matchId=req.body.matchId;

  let team=new Team({_id:req.body.teamId});
  let eventType=new EventType({_id:req.body.evenTypeId});
  let time=req.body.time;
  let player=req.body.player;
  let observation=req.body.observation;

  //set event values
  let event= new Event({
    eventType:eventType,
    team:team,
    time:time,
    player:player,
    observation:observation
  });

  //record event
  event.save()
  .then(Match.findOne({_id:matchId})
  .then(mfind=>{
    if(!mfind){
      res.sendStatus(401);
    }else{
      //record event in match
      mfind.events.push(event);
      mfind.save();
      res.sendStatus(200);
    }
  })
)

});

module.exports=router;
