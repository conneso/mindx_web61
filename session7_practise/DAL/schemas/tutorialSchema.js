const mongoose = require("mongoose");
const TutorialSchema = mongoose.Schema({
  title: String,
  description: String,
  published: Boolean,
});

module.exports = TutorialSchema
