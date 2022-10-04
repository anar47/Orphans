const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    questionNumber: {
        type: String,
        required: true
    },
    reading: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test'
    },
    options: {
        type: [String],
        required: true
    },
    correctOption: {
        type: Number,
        required: true,
    }
})

const Question = mongoose.model('Question', questionSchema);

module.exports = {
    questionSchema,
    Question
}