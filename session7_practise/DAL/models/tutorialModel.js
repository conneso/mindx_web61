const { default: mongoose } = require("mongoose");
const TutorialSchema = require("../schemas/tutorialSchema");

class TutorialModel {
  constructor() {
    this.model = mongoose.model("tutorials", TutorialSchema);
  }
  //C - Create
  create(newTutorial){
        return this.model.create(newTutorial)
  }
  //R - Research (All, ByTitle)
  //U - Update
  //Delete
}

module.exports = TutorialModel