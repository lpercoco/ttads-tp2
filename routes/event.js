var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var EventType = mongoose.model('eventType');
var Event = mongoose.model('event');
var Match = mongoose.model('match');
var Team = mongoose.model('team');

var router=require('express').Router();


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
      //mfind.save();
      console.log(mfind);
      res.sendStatus(200);
    }
  })
)

});

router.delete('/:id', (req, res) => {

  var eventId=req.params.id;

  Event.findByIdAndRemove(eventId, err=>{
    if(err){
      return res.sendStatus(404);
    }
    else{
      Match.findOne({'events':{_id:eventId}})
      .then(mfind =>{

        //delete from match
        mfind.events.pull(eventId);
        mfind.save();

        return res.sendStatus(200);
      })
    }
  })
})

module.exports=router;
