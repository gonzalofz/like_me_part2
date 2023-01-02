const express = require("express");
const router = express.Router();

const createNote = require("../../services/notes/createNote");
const deleteNote = require("../../services/notes/deleteNotes");
const getNotes = require("../../services/notes/getNotes");
const putNote = require("../../services/notes/putNote");

router.post("/createNote", (req, res) => {
  createNote(req, res);
});

router.get("/getNotes", (req, res) => {
  getNotes(req, res);
});

router.delete("/deleteNote/:id", (req, res) => {
  deleteNote(req, res);
});

router.put("/putNote/:id", (req, res) => {
  putNote(req, res);
});

module.exports = router;
