const express = require('express')
const router = express.Router()
const path = require('path')
const jwt = require('jsonwebtoken')
const {authenticate} = require('../controllers/auth')

router.post("/", authenticate)

module.exports = router