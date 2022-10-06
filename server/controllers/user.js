const {User} = require('../models/User.model')

const getUser = async(req, res) => {
    try{
        const user = await User.findById(
            req.params.id
        )
        res.status(200).json(user)
    }catch(err){
        res.status(500).send("Error finding user");
    }
}

const updateUserScore = async(req, res) => {
    try{
        const updatedUser = await User.findOneAndUpdate(
            {'email': req.params.email},
            { $set: {
                "readingExamScore" : req.body.score,
                "readingAnswers" : req.body.answers
            }},
            { new: true }
          );
          res.status(200).json(updatedUser);
    } catch (err) {
          console.log(err.message);
    }
}

const updateUserEssay = async(req, res) => {
    try{
        const updatedUser = await User.findOneAndUpdate(
            {'email': req.params.email},
            { $set: {
                "essayAnswer" : req.body.essay,
                "currentStage" : "TAKEN"
            }},
            { new: true }
          );
          res.status(200).json(updatedUser);
    } catch (err) {
          console.log(err.message);
    }
}

module.exports = {getUser, updateUserScore, updateUserEssay}