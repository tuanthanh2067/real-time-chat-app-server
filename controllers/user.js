const uniqid = require("uniqid");

const {
  addUser,
  matchUser,
  isUser,
  getRoomOfUser,
  stopSearching,
} = require("../user");

exports.signup = (req, res) => {
  const userId = uniqid();

  res.status(200).json({ id: userId });
};

exports.searchStranger = (req, res) => {
  // this route will be called every a specific second
  const userId = req.body.userId;

  if (isUser(userId)) {
    let roomId = getRoomOfUser(userId);
    if (roomId) {
      return res.status(200).json({ roomId: roomId });
    }
  } else {
    addUser(userId);
  }

  roomId = matchUser(userId);

  // if room is not ""
  // delete user in the array

  // will return "" if no match
  // "" will be handled in client side
  res.status(200).json({ roomId: roomId });
};

exports.stopSearching = (req, res) => {
  // user hits stop searching
  // set matched with and room id to ""
  // in case they are matched but not redirected yet
  // set the other person's matchedWith and room id to ""

  stopSearching(req.body.userId);

  return res.status(200);
};
