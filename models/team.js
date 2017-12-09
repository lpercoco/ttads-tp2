var mongoose =require('mongoose');

var teamSchema= new mongoose.Schema({
  name: {type: String, required: true},
  province: {type: String},
  city: {type: String}
},{timestamps:true});

mongoose.model('team', teamSchema);
