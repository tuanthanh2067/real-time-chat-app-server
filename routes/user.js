const router = require("express").Router();
const { signup } = require("../controllers/user");

router.get("/", (req, res) => {
  res.status(201).json({ message: "Hello user" });
});

router.get("/sign-up", signup);

module.exports = router;
