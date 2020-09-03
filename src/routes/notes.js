const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notesController');

router.route('/') // everytime this file is executed
    .get(getNotes)
    .post(createNote);

router.route('/:id') // when client send an id
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;