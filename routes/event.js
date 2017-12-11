var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Event = mongoose.model('event');

var router=require('express').Router();

// Event.remove().exec();
// Event.collection.dropAllIndexes(function (err, results) {
//     // Handle errors
// });

//get all
router.get('/', (req, res, next) => {
  Event.find({})
  .then(events =>{
    if(!events.length){ return res.sendStatus(204); }
    return res.json({'events': events})
  })
  .catch(next);
});

//get by id
router.get('/:id', (req, res, next) => {
  let id = req.params.id

  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Event.find({_id:id})
    .then(evento =>{
      if(!evento.length){ return res.sendStatus(404); }
      return res.json({'event': evento})
    })
    .catch(next);
  }else{
    res.send("Formato id incompatible");
  }

});

//delete by id
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;

  Event.findByIdAndRemove(id, (err, evento)=>{
    if(err){
      return res.sendStatus(404);
    }
    else{
      return res.sendStatus(200);
    }
  })
});

//add new one
router.post('/', (req, res, next) => {
  Event.find(req.body)
  .then(efind=>{
    if(!efind.length){
      var e = new Event(req.body);
      e.save();
      res.sendStatus(201);
    }else{ res.sendStatus(409);}
  })
});

//update by id
router.put('/:id',(req, res, next) =>{
  let id= req.params.id;

  Event.findOneAndUpdate({_id:id}, req.body, (err) =>{
    if(err){ res.sendStatus(404); }
    else{ res.sendStatus(200); }
  })
})


module.exports=router;
