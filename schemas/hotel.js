const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(20).messages({
    "string.base": "Enter the name of the hotel please",
    "any.required": "Complete this field, please",
    "string.empty": "Complete the name of the hotel, please",
    "string.min": "Min three characters in the field name",
    "string.max": "Max twenty characters",
  }),
  
  photo: joi.array().min(3).items(joi.string().required().uri().messages({
    "any.required": "Complete this input, please",
    "string.empty": "Complete the URL photo, please",
    "string.uri": "The field 'photo' must be an url"
  })),
  capacity: joi.number().required().messages({
    "number.empty": "Enter the number of the capacity please",
    "number.base": "Enter the number of the capacity please",
  }),
  cityId: joi.any(),

  userId: joi.any(),
});

module.exports = schema;
