const express = require('express');
const {getTest} = require('../controllers/test')
const Test = require('../models/Test.model')

const router = express.Router();

router.post('/save-results', /*checkAuth, */(req, res) => {
    let score = new Score({
        userId: req.body.currentUser,
        answers: req.body.answers,
        quizId: req.body.quizId
    });
    score.save().then(async resp => {
        await Quizzes.updateOne({ _id: req.body.quizId }, {
            $push: {
                scores: resp._id
            }
        });
        res.status(200).json({scoreId: resp._id});
    })
});

router.post('/:id', getTest)

module.exports = router;