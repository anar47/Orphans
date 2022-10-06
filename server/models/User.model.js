const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        props: {required: true, type: "email"}
    },
    phoneNumber: {
        type: String
    },
    currentStage: {
        type: String,
        required: true,
        default: "NOT_INVITED"
    },
    examLevel: {
        type: String,
        required: true
    },
    totalScore: {
        type: Number
    },
    registeredDate: {
        type: Date
    },
    essayAnswer: {
        type: String
    },
    readingAnswers: {
        type: [Number]
    },
    readingExamScore: {
        type: Number
    },
    disabilityType: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {
    userSchema,
    User
}
