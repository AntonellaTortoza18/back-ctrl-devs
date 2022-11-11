const City = require("../models/City.js");

const controller = {
  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        id: new_city._id,
        success: true,
        message: "the city was successfully created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  read: async (req, res) => {
   let query = {}
   if(req.query.zone){
    query ={zone: req.query.zone} 
   }
   if(req.query.name){
    query = {
      ...query,
      name: { $regex: req.query.name, $options: 'i' },
    }
   }
    try {
     
      let all_cities = await City.find(query) 
      if(all_cities){
        res.status(200).json({
          success: true,
          message: "the cities were successfully found",
          response: all_cities,
        })
      } else{
        res.status(404).json({
          success: false,
          message: "there are no cities",
        
        })
      }
       
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
}
module.exports = controller;