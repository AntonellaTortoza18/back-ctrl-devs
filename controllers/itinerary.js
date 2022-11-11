const Itinerary = require("../models/Itinerary");

const controller = {
  read: async (req, res) => {
    let query = {};
    if (req.query.cityId) {
      query = {
         cityId: req.query.cityId 
        };
    }
    try {
      let mitinerary = await Itinerary.find(query);
      if (mitinerary) {
        res.status(200).json({
          success: true,
          message: "the itinerary was successfully found",
          response: mitinerary,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "there is no itinerary",
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



