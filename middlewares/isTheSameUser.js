
const { mustBeTheOwner, activityNotFound} = require("../config/responses");
const { mustBeTheOwner, } = require("../config/responses");
const { notOwnerResponse, documentNotFound } = require("../config/responses");


const isTheSameUser = model => [
  async (req, res, next) => {
    let activity = await model.findOne({ _id: req.params.id });
    if (activity) {
      if (activity.userId.equals(req.user.id)) {
        return next();
      }
      return mustBeTheOwner(req, res);
    }
    return activityNotFound(req, res);
  },
];


module.exports = isTheSameUser;
