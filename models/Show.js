const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  
 /* Creating a schema for the hotels collection. */
    hotelId:{type: mongoose.Types.ObjectId, ref:"hotels", requiered:true},
    name: {type:String,required: true},
    description: {type: String, required: true},
    photo: {type:String, requiered:true},
    price: {type:Number,requiered:true},
    date: {type: Date, required:true},
    userId: {type: mongoose.Types.ObjectId, ref:"users", requiered:true}
});


const Show = mongoose.model('shows', schema);
module.exports = Show;

