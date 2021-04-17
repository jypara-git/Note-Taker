const router = require('express').Router();
const fs = require('fs');
const notes = require('../../db/db.json');
const path = require('path');

router.get('/notes/', (req, res) => {
    let results = notes;
    res.json(results);
});
function createNewNote(body, notes) {
    const newNote = body;
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes)
    )
    return newNote;
};
router.post('/notes', (req, res) => {
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

module.exports = router;