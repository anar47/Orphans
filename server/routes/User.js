const express = require('express')
const checkAuth = require('../middleware/check-auth')
const {getUser, updateUserScore, updateUserEssay} = require('../controllers/user')
const router = express.Router();

router.get("/:id", getUser)
router.post("/updateScore/:email", updateUserScore)
router.post("/updateEssay/:email", updateUserEssay)

module.exports = router
