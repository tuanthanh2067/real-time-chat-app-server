const router = require("express").Router();
const { signup, searchStranger } = require("../controllers/user");

router.get("/", (req, res) => {
  res.status(201).json({ message: "Hello user" });
});

router.get("/sign-up", signup);

router.post("/search", searchStranger);

module.exports = router;
