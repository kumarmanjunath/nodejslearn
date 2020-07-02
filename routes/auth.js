const router = require("express").Router();

router.post("/register", (req, res) => {
  res.send("This is from auth.js");
});

module.exports = router;
