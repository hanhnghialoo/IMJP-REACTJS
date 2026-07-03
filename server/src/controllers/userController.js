const User = require('../models/User');


const getUsers = async (req, res)=> {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = getUsers