const {Question} = require('../models/Question.model')

const getQuestion = async(req, res) => {
    try{
        const question = await Question.findById(
            req.params.id
        )
        res.status(200).json(question)
    }catch(err){
        res.status(500).send("Error finding question");
    }
}

module.exports = {getQuestion}