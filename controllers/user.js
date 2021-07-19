const uniqid = require("uniqid");

exports.signup = (req, res) => {
  const userId = uniqid();

  res.status(200).json({ id: userId });
};

exports.searchStranger = (req, res) => {
  // this route will be called every a specific second
};
