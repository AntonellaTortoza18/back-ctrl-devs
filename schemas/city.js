const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(20).messages({
    "string.base": "enter the name of the city please",
    "any.required": "complete this input, please",
    "string.empty": "complete the name of the city, please",
    "string.min":"min three characters",
    "string.max":"max twenty characters"
  }),
  zone: joi.string().required().min(3).max(6).messages({
    "any.required": "complete this input, please",
    "string.empty": "complete the zone of city, please",
    "string.min":"min three characters",
    "string.max":"max six characters"
  }),
  photo: joi.string().required().uri().messages({
    "any.required": "complete this input, please",
    "string.empty": "complete the URL photo, please",
  }),
  population: joi.number().required().min(500).max(10000000000).messages({
    "number.empty": "enter the number of the population please",
    "number.base": "enter the number of the population please",
  }),
  userId: joi.any(),
});

module.exports = schema;
