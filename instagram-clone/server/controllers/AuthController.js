const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');


const register = async (req,res) => {
    const {userName,password,firstName,lastName} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const newUser = new UserModel({
    userName,
    password: hashedPassword,
    firstName,
    lastName
    });

    try {
        await newUser.save();
        res.status(200).json('user created')
    } catch (error) {
        res.status(500).json(error)
    }
    
}
// generate access token
const generateToken = (User,TOKEN,times) => {
    return jwt.sign({id: User._id},TOKEN,{expiresIn: times})
}
//

const login = async (req,res) => {
    const {userName,password} = req.body;
    const User = await UserModel.findOne({userName: userName});
    try {
        if (User) {
            const isLogin = await bcrypt.compare(password,User.password);
            if (isLogin) {    
                    const accessToken = generateToken(User,process.env.JWT_ACCESS_TOKEN,"30s");
                    const refreshToken = generateToken(User,process.env.JWT_REFRESH_TOKEN,"10d");
                    res.cookie('refreshToken',refreshToken,{
                        httpOnly: true,
                        secure: false,
                        sameSite: "strict",
                        path:'/'
                    });
                    const{password,...others} = User._doc ;
                    res.status(200).json({...others,accessToken});               
            }else{
                res.status(402).json('password is not correct');
            }
        }else{
            res.status(401).json('user not found');
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    

};

module.exports = {register,login}