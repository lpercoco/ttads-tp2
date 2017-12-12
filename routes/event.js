var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var EventType = mongoose.model('eventType');
var Event = mongoose.model('event');
var Match = mongoose.model('match');

var router=require('express').Router();




module.exports=router;
