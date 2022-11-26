const { mustBeTheOwner} = require("../config/responses");

const isTheSameUser = (model) => [
  async (req, res, next) => {
    let document = await model.findOne({ _id: req.params.id });
    if (document.userId.equals(req.user.id)) {
      return next();
    }
    return mustBeTheOwner(req, res);
  },
];

module.exports = isTheSameUser;
