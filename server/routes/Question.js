const express =require( 'express')
const {getQuestion} = require('../controllers/question')
const Question = require( "../models/Question.model")

const router = express.Router();

router.post("/:id", getQuestion)

module.exports = router