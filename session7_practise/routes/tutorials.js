var express = require("express");
const TutorialModel = require("../DAL/models/tutorialModel");
var router = express.Router();
const authenticateToken = require("../common/authentication");

var tutorialModel = new TutorialModel();
router.get("", authenticateToken, (req, res) => {
  tutorialModel
    .getAll()
    .then((data) => {
      res.json({ count: data.length, tutorials: data });
    })
    .catch((err) => {
      throw err;
    });
});
router.get("/findById/:id", (req, res) => {
  tutorialModel
    .getById(req.params.id).then(data=> res.json(data))
    .catch((err) => {
      throw err;
    });
});
router.get("/findByTitle", authenticateToken, (req, res) => {
  let title = req.query.title;
  tutorialModel
    .findByTitle(title)
    .then((data) => {
      res.json({ count: data.length, tutorials: data });
    })
    .catch((err) => {
      throw err;
    });
});
router.post("", (req, res) => {
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
router.put("/:id", (req, res) => {
  let id = req.params.id;
  let tutorial = req.body;
  tutorialModel
    .update(id,tutorial)
    .then((data) => {
      res.json(tutorial);
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
