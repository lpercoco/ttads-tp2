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

  let team=req.body.teamId;
  let eventType=req.body.eventTypeId;
  let time=req.body.time;
  let player=req.body.player;
  let observation=req.body.observation;


  Match.findById(matchId, (err, match) => {
    if (err) {
      return res.sendStatus(500);
    }

    if (!match) {
      return res.sendStatus(404);
    }

    //set event values
     var newEvent= new Event({
      eventType:eventType,
      team:team,
      time:time,
      player:player,
      observation:observation
    });

    // save new event
    newEvent.save((err, event) => {
      if (err) {
        return res.sendStatus(500);
      }

      match.events.push(event._id);

      match.save((err) => {
        if (err) {
          return res.sendStatus(500);
        }
        return res.sendStatus(200);
      });
    });
  });
})


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

        return res.sendStatus(200).send();
      })
    }
  })
})

module.exports=router;
