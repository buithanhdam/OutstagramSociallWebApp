const jwt = require('jsonwebtoken');

const verifyToken = async (req,res,next) => {
    const token = req.headers.token;
    if (token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken,process.env.JWT_ACCESS_TOKEN,(err,user) => {
            if (err) {
                res.status(403).json("token is not valid");
            }
            req.body = user;
            next();
        })
    }else{
        res.status(401).json("you're not authenticated")
    }
}

module.exports = {verifyToken};