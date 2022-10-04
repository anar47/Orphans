const { Question } = require("../../models/Question.model");

const QuestionResourceOptions = {
    resource: Question,
    options: {
        properties: {
            questionNumber: {
                isRequired: true
            },
            _id: {
                isVisible: false
            },
            reading: {
            },
            question: {
                isRequired: true
            },
            options: {
                isRequired: true
            },
            correctOption: {
                isRequired: true
            }
        } 
    }
}

module.exports = {
    QuestionResourceOptions
}