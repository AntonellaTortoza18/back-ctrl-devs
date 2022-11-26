const joi = require("joi");

const schema = joi.object({
  userId: joi.any(),
  name: joi.string().required().messages({
    "any.required": "The field 'name' is required, please enter it",
    "string.empty": "The field 'name' is required, please enter it",
    "string.base":"Enter the name of the itinerary please",
  }),
  photo: joi.array().items(joi.string().uri()).length(3).required().messages({
    "any.required": "The field 'URL photo' is required, please complete it",
    "string.empty": "Complete the field 'URL photo', please",
    "string.uri": "The field 'URL photo' must be an url",
    "any.required": "The field 'photo' is required, please enter it",
 

  }),
  price: joi.number().min(0).required().messages({
    "any.required": "The field 'Price' is required, please enter it",
    "number.base": "The field 'Price' must be a number",
  }),
  duration: joi.number().min(0).required().messages({
    "any.required": "The field 'Duration' is required, please enter it",
    "number.base": "The field 'Duration' must be a number",
  }),
  description: joi.string().required().messages({
    "any.required": "The field 'Description' is required, please enter it",
    "string.empty": "The field 'Description' mustn't be empty, please fill it",
    "string.base": "The field 'Description' must be a string",
  }),
  cityId: joi.any()
});

module.exports = schema;
