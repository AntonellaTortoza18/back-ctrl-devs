const Hotel = require("../models/Hotel.js");

const controller = {
  create: async (req, res) => {
    try {
      let new_hotel = await Hotel.create(req.body);
      res.status(201).json({
        id: new_hotel._id,
        success: true,
        message: "the hotel was successfully created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  update: async(req, res) =>{
    let {id} = req.params
    try{
     let one = await Hotel.findOneAndUpdate({_id: id}, req.body, {new: true})
      if(one){
        res.status(200).json({
          id: one._id,
          success: true,
          message : "The hotel was successfully modified"
        })
      }else{
        res.status(404).json({
          success: false,
          message: "The hotel was not found"
        })
      }
    }catch(error){
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  }
}
module.exports = controller;