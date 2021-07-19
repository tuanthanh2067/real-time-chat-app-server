const users = [];

exports.addUser = (userId) => {
  // this function will add user if user is not in the array yet
  // if in the array, go check in the db to see if they have anyone matched yet
  // if not in the array, push to array, add to db
  if (users.includes(userId)) return;

  users.push(userId);
};

exports.deleteUser = (userId) => {
  // this route is called when user stops searching
  // delete user in the array and db
  const index = users.indexOf(userId);
  if (index > -1) {
    users.splice(index, 1);
  }
};

exports.matchUser = (userId) => {
  // this function will get the first user of the array
  // to match with user id
  // and then remove 2 users using deleteUser
  // @to-do: adjust data in mongodb
};
