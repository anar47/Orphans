const path = require('path')
const jwt = require('jsonwebtoken')

const authenticate = (req, res) => {
    try {
        const token = req.body.token;
        if(!token){return res.status(500).send("Unable to identify user")}
        jwt.verify(token, process.env.JWT_SECRET_KEY,(err, user) => {
            if(err) return res.status(401).send("Link is not valid")
            console.log(user)
            req.userInfo = user
        })
        return res.json(req.userInfo);
    } catch (err) {
        console.log(err.message)
  }
}

module.exports = {
    authenticate
}