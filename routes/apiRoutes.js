const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", async (req, res) => {
  try {
    const notes = store.getNotes();

    res.json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/notes", async (req, res) => {
  try {
    const newNote = store.setNotes(req.body);

    res.json(newNote);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/notes/:id", async (req, res) => {
  try {
    store.deleteNote(req.params.id);
  } catch (err) {
    res.status(500).json(err);
  }

  res.json({ ok: true });
});

module.exports = router;
