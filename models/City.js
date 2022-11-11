const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  
    name: {type:String,required: true},
    zone: {type:String, requiered:true},
    photo: {type:String,requiered:true},
    population: {type:Number,requiered:true},
    userId: {type: mongoose.Types.ObjectId, ref:"users", requiered:true},

});


const City = mongoose.model('cities', schema);
module.exports = City;