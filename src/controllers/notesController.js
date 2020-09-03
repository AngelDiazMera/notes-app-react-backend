const notesController = {};

const Note = require('../models/Note');

// GET
notesController.getNotes = async (req, res) => {
    const notes = await Note.find(); // async function. Returns array
    res.json(notes);
};

// POST
notesController.createNote = async (req, res) =>{ 
    const { title, content, date, author } = req.body;// json client data
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    await newNote.save();
    res.json({message: 'Note saved'});
};

// only GET
notesController.getNote = async (req, res) => {   
    const note = await Note.findById(req.params.id); // async function. Returns array
    res.json(note);
};

// PUT
notesController.updateNote = async(req, res) => {
    const { title, content, date, author } = req.body;

    await Note.findOneAndUpdate({_id: req.params.id}, 
        { title, content, date, author });
    res.json({message: 'Note updated'})
};

// DELETE
notesController.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({_id: req.params.id});
    res.json({message: 'Note deleted'})
};

module.exports = notesController;