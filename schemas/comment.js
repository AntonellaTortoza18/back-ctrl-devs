const joi = require("joi");

const schema = joi.object({
  
  showId: joi.any(),
  itineraryId: joi
        .string()
        .messages({
            'string.base': `Event Id must be a type of 'text'`,
            'any.required': 'The Event Id field is required',
            'string.empty': 'The itinerary ID field is empty',
        }),
  userId: joi.any(),
  comment: joi.string().required().min(3).messages({
    "string.min": "Name: min 3 characters",
  }),
  userId: joi.any(),
  date: joi.date().required(),
});

module.exports = schema;