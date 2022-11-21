const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(20).messages({
    "string.base": "Enter the name of the city please",
    "any.required": "The field 'Name of the city' is required, please complete it",
    "string.empty": "Complete the field 'Name of the city', please",
    "string.min": "Name: min 3 characters",
    "string.max": "Name: max 20 characters",
  }),
  zone: joi.string().required().min(3).max(15).messages({
    "string.base": "Enter the zone of the city please",
    "any.required": "The field 'Zone of city' is required, please complete it",
    "string.empty": "Complete the field 'Zone of city', please",
    "string.min": "Zone: min 3 characters",
    "string.max": "Zone: max 15 characters",
  }),
  photo: joi.string().required().uri().messages({
    "any.required": "The field 'URL photo' is required, please complete it",
    "string.empty": "Complete the field 'URL photo', please",
    "string.uri": "The field 'URL photo' must be an url",
  }),
  population: joi.number().required().messages({
    "number.empty": "Complete the field 'Population' please",
    "number.base": "The field 'Population' must be a number",
    "any.required": "The field 'Population' is required, please complete it",
  }),
  userId: joi.any(),
});

module.exports = schema;
