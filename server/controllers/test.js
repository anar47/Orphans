const {Test} = require('../models/Test.model')

const getTest = async(req, res) => {
    try{
        console.log(req.params)
        const test = await Test.findById(req.params.id).exec()
        console.log(test)
        res.status(200).json(test)
    } catch(err){
        console.log(err.message)
        res.status(500).send("Error finding test");
    }
}

module.exports = {getTest}