var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var router=require('express').Router();
var Team = mongoose.model('team');
var Match = mongoose.model('match');
var ObjectId = mongoose.Types.ObjectId;

//Match.remove().exec();

Match.collection.dropAllIndexes(function (err, results) {
    // Handle errors
});

//get all matchs
router.get('/', (req, res, next) => {
  Match.find({})
  .populate('localTeam')
  .populate('visitorTeam')
  .populate('events')
  .then(matchs =>{
    if(!matchs.length){ return res.sendStatus(204); }
    else{return res.json({'matchs': matchs});}
  })
  .catch(next);
});



//get not finished matchs
router.get('/active', (req, res, next) => {
  Match.find({endOfMatch:null})
  .populate('localTeam')
  .populate('visitorTeam')
  .populate('events')
  .then(matchs =>{
    if(!matchs.length){ return res.sendStatus(204); }
    else{return res.json({'matchs': matchs});}
  })
  .catch(next);
});


//set end of match
router.put('/:id',(req, res, next) =>{
  let id= req.params.id;
  let now= new Date();

  Match.findOneAndUpdate({_id:id}, { $set: { endOfMatch: now  } }, (err) =>{
    if(err){ res.sendStatus(404); }
    else{ res.sendStatus(200); }
  })
})

//get match by id
router.get('/:id', (req, res, next) => {
  let id = req.params.id

  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Match.find({_id:id})
    .populate('localTeam')
    .populate('visitorTeam')
    .populate('events')
    .then(match =>{
      if(!match.length){ return res.sendStatus(404); }
      else{return res.json({'match': match});}
    })
    .catch(next);
  }else{
    res.send("Formato id incompatible");
  }

});

//add new match
router.post('/', (req, res, next) => {

  let localID=req.body.localTeamId;
  let visitorID=req.body.visitorTeamId;
  let dateTimeBegin=req.body.dateTimeBegin;

  if ((localID.match(/^[0-9a-fA-F]{24}$/) && visitorId.match(/^[0-9a-fA-F]{24}$/)) {
  //create new match
  let newMatch= new Match({localTeam:localID,
                           visitorTeam:visitorID,
                           beginOfMatch:dateTimeBegin});

    //if it doesnt exist, save it

    Match.find(newMatch)
    .then(mfind=>{
      if(!mfind.length){
        newMatch.save();
        res.sendStatus(201);
      }else{ res.sendStatus(409);}
    })
  }else{
    res.send("Formato id equipos incompatible");
  }

  });

  module.exports=router;
