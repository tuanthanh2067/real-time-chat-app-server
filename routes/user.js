const router = require("express").Router();
const {
  signup,
  searchStranger,
  stopSearching,
  deleteUser,
} = require("../controllers/user");

router.get("/", (req, res) => {
  res.status(201).json({ message: "Hello user" });
});

router.get("/sign-up", signup);

router.post("/search", searchStranger);

router.post("/stop", stopSearching);

router.delete("/delete/:userId", deleteUser);

module.exports = router;
