const express = require('express')
const Users = require('../models/User.model')
const checkAuth = require('../middleware/check-auth')
const {getUser} = require('../controllers/user')
const router = express.Router();

router.get("/:id", getUser)

module.exports = router
