
var router=require('express').Router();

router.use('/api/teams', require('./team'));

router.get('/', function(req, res, next) {
  res.send('Home');
});

module.exports=router;
