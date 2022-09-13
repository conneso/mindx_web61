const mongoose = require("mongoose");
class databse {
  constructor() {}
  connect = async () => {
    await mongoose.connect(
      "mongodb+srv://mXWeb61:lpilWrmQb192qNqY@cluster0.awgnvid.mongodb.net/mindx-web58?retryWrites=true&w=majority"
    );
  };
}

module.exports = databse;
