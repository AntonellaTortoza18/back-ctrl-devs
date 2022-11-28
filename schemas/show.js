const joi = require("joi");

const ShowSchema = joi.object({
  name: joi.string().required().messages({
    "any.required": "The field 'name' is required, please enter it",
    "string.empty": "The field 'name' mustn't be empty, please fill it",
    "string.base": "The field 'name' must be a string",
  }),
  description: joi.string().required().messages({
    "any.required": "The field 'description' is required, please enter it",
    "string.empty": "The field 'description' mustn't be empty, please fill it",
    "string.base": "The field 'description' must be a string",
  }),
  photo:joi.string().uri().required().messages({
    "any.required": "The field 'photo' is required, please enter it",
    "string.empty": "The field 'photo' mustn't be empty, please fill it",
    "string.uri": "The content of field 'photo' must be an url",
  }),
  price: joi.number().min(0).required().messages({
    "any.required": "The field 'price' is required, please enter it",
    "number.base": "The field 'price' must be a number",
    "number.min": "The field 'price' must be a number greater or equal to 0, please change it",
  }),
  date: joi.date().min(0).required().messages({
    "any.required": "The field 'price' is required, please enter it",
    "number.base": "The field 'price' must be a number",
    "number.min": "The field 'price' must be a number greater or equal to 0, please change it",
  }),
 
 
  hotelId: joi.any().required().messages({
    "any.required": "The field 'userId' is required, please enter it",
  }),
  userId: joi.any(),
});

module.exports = ShowSchema;