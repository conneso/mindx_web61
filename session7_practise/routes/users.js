var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: String,
  createdAt: Date,
  avatar: String,
  id: Number,
  fullname: String,
  username: String,
  password: String,
});

const userModel = mongoose.model("users", userSchema);

/* GET home page. */
router.get("/", function (req, res, next) {
  mongoose
    .connect(
      "mongodb+srv://mXWeb61:lpilWrmQb192qNqY@cluster0.awgnvid.mongodb.net/mindx-web58?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("database connected");
      userModel.find().then((users) => {
        res.json({ count: users.length, data: users });
      });
    });
});

router.get("/findByUsername", (req, res) => {
  mongoose
    .connect(
      "mongodb+srv://mXWeb61:lpilWrmQb192qNqY@cluster0.awgnvid.mongodb.net/mindx-web58?retryWrites=true&w=majority"
    )
    .then(() => {
      let uname = req.query.uname;
      userModel.find({ username: uname }).then((users) => {
        res.json({ count: users.length, data: users });
      });
    });
});
module.exports = router;
