
var router=require('express').Router();

router.use('/api/teams', require('./team'));
router.use('/api/matchs',require('./match'));
router.use('/api/events',require('./event'));

module.exports=router;
