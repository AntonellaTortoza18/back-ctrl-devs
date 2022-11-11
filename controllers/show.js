const Show = require("../models/Show.js");

const controller = {
  read: async (req, res) => {
    let query = {};
    if (req.query.hotelId) {
      query = {
        hotelId: req.query.hotelId,
      };
    }
    try {
      let show = await Show.find(query);
      if (show) {
        res.status(200).json({
          success: true,
          message: "The show was successfully found",
          response: show,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "there is no show",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  create: async (req, res) => {
    try {
      let new_show = await Show.create(req.body);
      res.status(201).json({
        id: new_show._id,
        success: true,
        message: "the show was successfully created",
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
     let show = await Show.findOneAndUpdate({_id: id}, req.body, {new: true})
      if(show){
        res.status(200).json({
          id: show._id,
          success: true,
          message : "The show was successfully modified"
        })
      }else{
        res.status(404).json({
          success: false,
          message: "The show was not found"
        })
      }
    }catch(error){
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  },
};
module.exports = controller;
