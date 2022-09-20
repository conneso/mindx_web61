var express = require("express");
const TutorialModel = require("../DAL/models/tutorialModel");
var router = express.Router();

var tutorialModel = new TutorialModel();

router.put("/create", (req, res) => {
  let newTutorial = req.body;
  tutorialModel
    .create(newTutorial)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
