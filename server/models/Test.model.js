const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    readingTitle: {
        type: String,
        required: true
    },
    readingBody: {
        type: String,
        required: true
    },
    readingQuestions: {
        type: [mongoose.Types.ObjectId],
        ref: 'Question',
        required: true,
    },
    difficulity: {
        type: String,
        required: true
    },
    essayQuestion: {
        type: String,
        required: true
    }
})

const Test = mongoose.model('Test', testSchema);

module.exports = {
    Test
}