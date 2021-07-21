const uniqid = require("uniqid");

const { addUser, matchUser, deleteUser } = require("../user");

exports.signup = (req, res) => {
  const userId = uniqid();

  res.status(200).json({ id: userId });
};

exports.searchStranger = (req, res) => {
  // this route will be called every a specific second
  const userId = req.body.userId;
  addUser(userId);
  const room = matchUser(userId);

  // if room is not ""
  // delete user in the array

  // will return "" if no match
  // "" will be handled in client side
  res.status(200).json({ roomId: room });
};
