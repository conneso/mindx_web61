const { default: mongoose } = require("mongoose");
const TutorialSchema = require("../schemas/tutorialSchema");

class TutorialModel {
  constructor() {
    this.model = mongoose.model("tutorials", TutorialSchema);
  }
  //C - Create
  create(newTutorial) {
    return this.model.create(newTutorial);
  }
  //R - Research (All, ByTitle)
  getAll() {
    return this.model.find({});
  }
  getById(id) {
    return this.model.findById(id);
  }
  findByTitle(title) {
    return this.model.find({ title: { $regex: `.*${title}.*` } });
  }
  //U - Update
  update(id, tutorial) {
    return this.model.findByIdAndUpdate(id, {
      $set: {
        title: tutorial.title,
        description: tutorial.description,
        published: tutorial.published,
      },
    });
  }
  //Delete
  delete(id) {
    return this.model.findByIdAndDelete(id);
  }
  deleteAll() {
    return this.model.deleteMany({});
  }
}

module.exports = TutorialModel;
