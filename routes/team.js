
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var router=require('express').Router();
var Team = mongoose.model('team');

//seteo de valores de prueba
// Team.remove().exec();
//
// var nob = new Team({
//   name: 'nob',
//   province: 'Sta Fe',
//   city: 'Rosario'
// });
// nob.save();
//
// var colon = new Team({
//   name: 'colon',
//   province: 'Sta Fe',
//   city: 'Sta Fe'
// });
// colon.save();

//

router.get('/', (req, res, next) => {
  Team.find({})
  .then(teams =>{
    if(!teams.length){ return res.sendStatus(404); }
    return res.json({'teams': teams})
  })
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Team.findById(id)
  .then(team =>{
    if(!team.length){ return res.sendStatus(404); }
    return res.json({'team': team})
  })
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;

  Team.findById(id)
  .then(team =>{
    if(!team.length){
      return res.sendStatus(404);
    }

    Team.remove({_id:id}).exec();
    return res.sendStatus(200);
  });
});

router.post('/', (req, res, next) => {
  Team.find(req.body)
  .then(tfind=>{
    if(!tfind.length){
      var t = new Team(req.body);
      t.save();
      res.sendStatus(201);
    }else{ res.sendStatus(409);}
  })
});

router.put('/:id',(req, res, next) =>{
  let id= req.params.id;

  Team.findOneAndUpdate({_id:id}, req.body, (err) =>{
    if(err){ res.sendStatus(404); }
    else{ res.sendStatus(200); }
  })
})

module.exports=router;
