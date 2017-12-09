var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var router=require('express').Router();
var Team = mongoose.model('team');
var Match = mongoose.model('match');
var ObjectId = mongoose.Types.ObjectId;

 //Match.remove().exec();

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

  Match.findById()
  .populate('localTeam')
  .populate('visitorTeam')
  .populate('events')
  .then(match =>{
    if(!match.length){ return res.sendStatus(404); }
    else{return res.json({'match': match});}
  })
  .catch(next);
});

//add new match
router.post('/', (req, res, next) => {

let localID=req.body.localTeamId;
let visitorID=req.body.visitorTeamId;
let dateTimeBegin=req.body.dateTimeBegin;

// var localTeam = new Team();
// var visitorTeam = new Team();
//
// //search local team
// Team.find({id:localID})
// .then(team =>{
//   if(!team.length){ return res.sendStatus(404); }
//   var local = new Team(team);
//   console.log(local);
//   console.log(local._id);
// })
//
// //search visitor team
// Team.find({id:visitorID})
// .then(team =>{
//   if(!team.length){ return res.sendStatus(404); }
//   var visitor = new Team(team);
//   visitor.populate();
//   console.log(visitor);
//   console.log(visitor._id);
// })


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

});

module.exports=router;
