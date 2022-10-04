const { Test } = require('../../models/Test.model');

const TestResourceOptions = {
    resource: Test,
    options: {
        properties: {
            title: {
                isRequired: true
            },
            _id: {
                isVisible: false
            },
            body: {
                type: 'richtext',
                isRequired: true
            },
            questions: {
                isRequired: true
            },
            difficulity: {
                isRequired: true,
                availableValues: [
                    {value: "Elementary", label: "Elementary"},
                    {value: "Intermediate", label: "Intermediate"},
                    {value: "UpperIntermediate", label: "Upper Intermediate"}
                ]
            }
        } 
    }
}

module.exports = {
    TestResourceOptions
}