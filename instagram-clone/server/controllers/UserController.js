
const UserModel = require('../models/UserModel')



const getAllUser = async (req,res)=>{
    try {
        const users = await UserModel.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getAllUser};