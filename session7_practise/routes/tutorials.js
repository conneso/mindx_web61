var express = require("express");
const TutorialModel = require("../DAL/models/tutorialModel");
var router = express.Router();

var tutorialModel = new TutorialModel();
router.get("", (req, res) => {
  tutorialModel
    .getAll()
    .then((data) => {
      res.json({ count: data.length, tutorials: data });
    })
    .catch((err) => {
      throw err;
    });
});
router.get("/findByTitle", (req, res) => {
  let title = req.query.title;
  tutorialModel
    .findByTitle(title)
    .then((data) => {
      res.json({ count: data.length, toturials: data });
    })
    .catch((err) => {
      throw err;
    });
});
router.put("", (req, res) => {
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
router.post("", (req, res) => {
  let tutorial = req.body;
  tutorialModel
    .update(tutorial)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});
router.delete("", (req, res) => {
  let id = req.query.id;
  tutorialModel
    .delete(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});
router.delete("/deleteAll", (req, res) => {
  tutorialModel
    .deleteAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});
module.exports = router;
