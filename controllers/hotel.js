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
  read: async (req, res) => {
    let query = {};
    let order = {}
    
    if (req.query.name) {
      query = {
        ...query,
        name: { $regex: req.query.name, $options: "i" },
      };
    }

   if(req.query.order){
    order = {
      name : req.query.order
    }
   }

    try {
      let all_hotels = await Hotel.find(query).sort(order)
      if (all_hotels) {
        res.status(200).json({
          success: true,
          message: "the hotels were successfully found",
          response: all_hotels,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "there are no hotels",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
module.exports = controller;
