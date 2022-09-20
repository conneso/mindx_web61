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
  findByTitle(title) {
    return this.model.find({ title: { $regex: `.*${title}.*` } });
  }
  //U - Update
  update(tutorial){
    return this.model.updateOne(tutorial);
  }
  //Delete
  delete(id){
    return this.model.findByIdAndDelete(id);
  }
  deleteAll(){
    return this.model.deleteMany({})
  }
}

module.exports = TutorialModel;
