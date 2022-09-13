var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const UserModel = require("../DAL/models/userModel");
const model = new UserModel();

/* GET home page. */
router.get("/", function (req, res, next) {
//   mongoose
//     .connect(
//       "mongodb+srv://mXWeb61:lpilWrmQb192qNqY@cluster0.awgnvid.mongodb.net/mindx-web58?retryWrites=true&w=majority"
//     )
//     .then(() => {
//       console.log("database connected");
//       userModel.find().then((users) => {
//         res.json({ count: users.length, data: users });
//       });
//     });
});

router.get("/findByUsername", (req, res) => {
//   mongoose
//     .connect(
//       "mongodb+srv://mXWeb61:lpilWrmQb192qNqY@cluster0.awgnvid.mongodb.net/mindx-web58?retryWrites=true&w=majority"
//     )
//     .then(() => {
//       let uname = req.query.uname;
//       userModel.find({ username: uname }).then((users) => {
//         res.json({ count: users.length, data: users });
//       });
//     });
});

router.post("/login", (req, res) => {
  let user = req.body;
  let uname = user.username;
  let pass = user.password;

  model.findByUsernameAndPassword(uname, pass).then((data) => {
    if (data.length > 0) {
      //generate jwt token
      let token = "day la jwt token"; //cai nay se cai dat sau
      res.json({ existed: true, token: token});
    } else {
      res.json({ existed: false, token: "" });
    }
  });
});
module.exports = router;
