const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  
    name: {type:String,required: true},
    photo: [{type:String, requiered:true}],
    capacity: {type:Number,requiered:true},
    cityId: {type: mongoose.Types.ObjectId, ref:"cities",requiered:true},
    userId: {type: mongoose.Types.ObjectId, ref:"users", requiered:true}

});


const Hotel = mongoose.model('hotels', schema);
module.exports = Hotel;



