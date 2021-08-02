const uniqid = require("uniqid");

const users = [];
// userId
// matchedWith: "" - the other person's id
// roomId: ""

exports.isUser = (userId) => {
  return users.find((u) => u.userId === userId) ? true : false;
};

exports.addUser = (userId) => {
  // this function will add user if user is not in the array yet
  users.push({
    userId: userId,
    matchedWith: "",
    roomId: "",
  });
};

exports.deleteUser = (userId) => {
  // this route is called when user stops searching
  // or user is being redirect to a room in front end
  // delete user in the array

  const index = users.findIndex((u) => u.userId === userId);

  if (index > -1) {
    users.splice(index, 1);
  }

  console.log(users);
};

exports.matchUser = (userId) => {
  // this function will get the first user of the array
  // to match with user id

  // set matched with for both users

  // this means finding the first user in the array but not me
  const index = users.findIndex((u) => !u.matchedWith && u.userId !== userId);

  // only happen if it found a user to match

  if (index > -1) {
    users[index].matchedWith = userId;
    const index2 = users.findIndex((u) => u.userId === userId);

    if (index2 > -1) {
      users[index2].matchedWith = users[index].userId;
    }

    // set a room for both users
    const room = uniqid();
    users[index].roomId = room;
    users[index2].roomId = room;

    return room;
  }

  return "";
};

// get room of a user if they are a user
exports.getRoomOfUser = (userId) => {
  return users.find((u) => u.userId === userId).roomId;
};

exports.stopSearching = (userId) => {
  const user = users.find((u) => u.userId === userId);

  if (user && user.matchedWith !== "") {
    const stranger = users.find((u) => u.userId === user.matchedWith);

    if (stranger) {
      stranger.matchedWith = "";
      stranger.roomId = "";
    }
  }

  user.matchedWith = "";
  user.roomId = "";
};
