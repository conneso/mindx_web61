var express = require("express");
var router = express.Router();
const authenticateToken = require("../common/authentication");
const UserModel = require("../DAL/models/userModel");
const model = new UserModel();

/* GET home page. */
router.get("/", authenticateToken, function (req, res, next) {
  model.getAll().then((data) => {
    res.json({ count: data.length, users: data });
  });
});

router.get("/findByUsername", (req, res) => {});

router.post("/login", (req, res) => {
  let user = req.body;
  let uname = user.username;
  let pass = user.password;
  model.findByUsernameAndPassword(uname, pass).then((data) => {
    if (data.length > 0) {
      //generate jwt token
      let token = model.generateAccessToken(uname); // "day la jwt token"; //cai nay se cai dat sau
      res.json({ existed: true, token: token });
    } else {
      res.status(500).send({ message: 'Login failed!'});
    }
  });
});

router.put("/create", authenticateToken, (req, res) => {
  let user = req.body;
  model.createNewUser(user).then((data) => {
    res.json(data);
  });
});
module.exports = router;
