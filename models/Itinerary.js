const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    cityId: {type: String,require: true},
    name: {type: String,require: true},
    photo:[{type: String, require:true}],
    description: {type: String,require: true},
    price: {type: Number,require: true},
    duration: {type: Number,require: true},
    userId: {type: mongoose.Types.ObjectId, ref:"users", requiered:true},
});


const Itinerary = mongoose.model('itineraries', schema);
module.exports = Itinerary;