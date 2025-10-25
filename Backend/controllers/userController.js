const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const userExists = await User.findOne({email});
        if(userExists){
            return res.json({message: "User already exists"});
        }

        const user = new User({name, email, password});
        await user.save();
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '10h'});
        res.json({token});
    } catch (error) {
        res.json({message: "Server error"});
    }
};


// Login User
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.json({message: "User not found"});
        }
        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.json({message: "Invalid Password"});
        }
        
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '10h'});
        res.json({token});
    } catch (error) {
        res.json({message: "Server error"});
    }
};

module.exports = {registerUser, loginUser};
