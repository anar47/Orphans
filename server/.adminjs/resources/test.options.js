const { Test } = require('../../models/Test.model');

const TestResourceOptions = {
    resource: Test,
    options: {
        properties: {
            _id: {
                isVisible: false
            },
            readingBody: {
                type: 'richtext',
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