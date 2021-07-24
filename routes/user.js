const router = require("express").Router();
const {
  signup,
  searchStranger,
  stopSearching,
} = require("../controllers/user");

router.get("/", (req, res) => {
  res.status(201).json({ message: "Hello user" });
});

router.get("/sign-up", signup);

router.post("/search", searchStranger);

router.post("/stop", stopSearching);

module.exports = router;
