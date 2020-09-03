const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true // this object defines that content is required
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // this way, it allows to save creation date and update date
});

module.exports = model('Note', noteSchema);