const userSchema = require("../schemas/userSchema");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

class UserModel {
  constructor() {
    this.model = mongoose.model("users", userSchema);
  }
  getAll() {
    var query = this.model.find();
    return query.exec();
  }
  findByUsernameAndPassword(uname, pass) {
    var query = this.model.find({ username: uname, password: pass }).limit(1);
    return query.exec();
  }

  generateAccessToken = function (uname) {
    return jwt.sign({ username: uname }, "bWluZHgud2ViNjE=", {
      expiresIn: "1h",
    });
  };
}
UserModel.prototype.createNewUser = async function (user) {
  var newUser = {
    fullname: user.fullname,
    username: user.username,
    password: user.password,
    createdAt: new Date(),
  };
  return this.model.updateOne(newUser, newUser, { upsert: true });
};
module.exports = UserModel;
