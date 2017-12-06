var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var router=require('express').Router();
var Team = mongoose.model('team');
var Match = mongoose.model('match');

//mock data

Match.remove().exec();

//var dateOne=new Date(1992, 1, 1, 19, 30);

var matchOne = new Match({
  id: 1,
  localTeam: '5a2082c711a43f72d2da7714',
  visitorTeam: '5a2082c711a43f72d2da7715',
  beginOfMatch: new Date()
});

matchOne.save();

var matchTwo = new Match({
  id: 2,
  localTeam: '5a2082c711a43f72d2da7715',
  visitorTeam: '5a2082c711a43f72d2da7714',
  beginOfMatch: new Date(),
  endOfMatch: new Date(1992, 1, 1, 19, 30)
});

matchTwo.save();

//

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
  Match.find({endOfMatch: null})
  .populate('localTeam')
  .populate('visitorTeam')
  .populate('events')
  .then(matchs =>{
    if(!matchs.length){ return res.sendStatus(204); }
    else{return res.json({'matchs': matchs});}
  })
  .catch(next);
});



module.exports=router;
