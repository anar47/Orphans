const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    questions: {
        type: [mongoose.Types.ObjectId],
        ref: 'Question',
        required: true,
    },
    difficulity: {
        type: String,
        required: true
    }
})

const Test = mongoose.model('Test', testSchema);

module.exports = {
    Test
}