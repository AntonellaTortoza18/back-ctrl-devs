// primero requiero el modelo que necesito controlar
const User = require("../models/User.js");

const controller = {
  create: async (req, res) => {
    try {
      let new_user = await User.create(req.body);
      res.status(201).json({
        id: new_user._id,
        success: true,
        message: "el usuario se creo satisfactoriamente",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

}
  

      
   

    



// tercero exporto el controlador
module.exports = controller;
