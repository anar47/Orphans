const User = require('../models/User.model')

export const getUser = async(req, res) => {
    try{
        const user = await User.findById(
            req.params.id
        )
        res.status(200).json(user)
    }catch(err){
        res.status(500).send("Error finding user");
    }
}

module.exports = {getUser}