const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName:{require:true, type: String, unique: true},
    password: {require: true, type: String},
    firstName: {require:true,type: String},
    lastName:{require:true,type:String}


},{timestamps: true});

const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;
