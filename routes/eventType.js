var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var EventType = mongoose.model('eventType');

var router=require('express').Router();

// Event.remove().exec();
// Event.collection.dropAllIndexes(function (err, results) {
//     // Handle errors
// });

//get all
router.get('/', (req, res, next) => {
  EventType.find({})
  .then(events =>{
    if(!events.length){ return res.sendStatus(204); }
    return res.json({'eventTypes': events})
  })
  .catch(next);
});

//get by id
router.get('/:id', (req, res, next) => {
  let id = req.params.id

  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    EventType.find({_id:id})
    .then(eventType =>{
      if(!eventType.length){ return res.sendStatus(404); }
      return res.json({'eventType': eventType})
    })
    .catch(next);
  }else{
    res.send("Formato id incompatible");
  }

});

//delete by id
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;

  EventType.findByIdAndRemove(id, (err, evento)=>{
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
  EventType.find(req.body)
  .then(efind=>{
    if(!efind.length){
      var e = new EventType(req.body);
      e.save();
      res.sendStatus(201);
    }else{ res.sendStatus(409);}
  })
});

//update by id
router.put('/:id',(req, res, next) =>{
  let id= req.params.id;

  EventType.findOneAndUpdate({_id:id}, req.body, (err) =>{
    if(err){ res.sendStatus(404); }
    else{ res.sendStatus(200); }
  })
})


module.exports=router;
