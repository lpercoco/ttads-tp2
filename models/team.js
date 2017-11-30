var mongoose =require('mongoose');

var teamSchema= new mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  name: {type: String, required: true},
  province: {type: String},
  city: {type: String}
},{timestamps:true});

mongoose.model('team', teamSchema);
