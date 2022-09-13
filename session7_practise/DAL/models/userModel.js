const userSchema = require("../schemas/userSchema");
const mongoose = require("mongoose");

class UserModel {
  constructor() {
    this.model = mongoose.model("users", userSchema);
  }

  findByUsernameAndPassword(uname, pass) {
    var query = this.model.find({ username: uname, password: pass }).limit(1);
    return query.exec();
  }
}

module.exports = UserModel;
