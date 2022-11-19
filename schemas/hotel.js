const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(20).messages({
    "string.base": "enter the name of the hotel please",
    "any.required": "complete this input, please",
    "string.empty": "complete the name of the hotel, please",
    "string.min": "min three characters",
    "string.max": "max twenty characters",
  }),
  
  photo: joi.array().min(3).items(joi.string().required().uri().messages({
    "any.required": "complete this input, please",
    "string.empty": "complete the URL photo, please",
  })),
  capacity: joi.number().required().min(500).max(100000).messages({
    "number.empty": "enter the number of the capacity please",
    "number.base": "enter the number of the capacity please",
  }),
  cityId: joi.any(),

  userId: joi.any(),
});

module.exports = schema;
