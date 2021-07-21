const uniqid = require("uniqid");

const users = [];
// userId
// matchedWith: "" - the other person's id
// roomId: ""

exports.addUser = (userId) => {
  // this function will add user if user is not in the array yet
  const user = users.find((u) => u.user === userId);
  if (!user) {
    users.push({
      userId: userId,
      matchedWith: "",
      roomId: "",
    });
  }
};

exports.deleteUser = (userId) => {
  // this route is called when user stops searching
  // or user is being redirect to a room in front end
  // delete user in the array

  const index = users.findIndex((u) => u.userId === userId);

  if (index > -1) {
    users.splice(index, 1);
  }
};

exports.matchUser = (userId) => {
  // this function will get the first user of the array
  // to match with user id

  // set matched with for both users
  const index = users.findIndex((u) => !u.matchedWith);

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
