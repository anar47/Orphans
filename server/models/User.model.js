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
    disabilityType: {
        type: String,
        required: true
    },
    currentStage: {
        type: String,
        required: true
    },
    examLevel: {
        type: String,
        required: true
    },
    registeredDate: {
        type: Date
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {
    userSchema,
    User
}
