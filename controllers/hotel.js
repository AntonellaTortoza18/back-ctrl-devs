const Hotel = require("../models/Hotel.js");

const controller = {
  create: async (req, res) => {
    try {
      let new_hotel = await Hotel.create(req.body);
      res.status(201).json({
        response: new_hotel,
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

  update: async (req, res) => {
    let { id } = req.params;
    try {
      let one = await Hotel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (one) {
        res.status(200).json({
          id: one._id,
          success: true,
          message: "The hotel was successfully modified",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "The hotel was not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  read: async (req, res) => {
    let query = {};
    let order = {};
    if(req.query.userId){
      query ={userId: req.query.userId}
    }

    if (req.query.name) {
      query = {
        ...query,
        name: { $regex: req.query.name, $options: "i" },
      };
    }

    if (req.query.order) {
      order = {
        name: req.query.order,
      };
    }

    try {
      let all_hotels = await Hotel.find(query).sort(order).populate({
        path: "userId",
        select: "role -_id",
      });
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
  getHotel: async (req, res) => {
    let id = req.params.id;
    try {
      let hotel = await Hotel.find({ _id: id }).populate({
        path: "userId",
        select: "name photo -_id",
      });
      if (hotel) {
        res.status(200).json({
          success: true,
          message: "The hotel were successfully found",
          response: hotel,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "there are no Hotels",
        });
      }
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    let {id} = req.params
    try {
      let hotel = await Hotel.findOneAndDelete({_id:id})
      if(hotel){
        res.status(200).json({
          res: hotel,
          success:true,
          message: "The hotel was successfully deleted"
        })
       
      }else{
        res.status(404).json({
          res: hotel,
          success:false,
          message: "The hotel was not found"
        })
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
