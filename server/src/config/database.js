const mongoose = require('mongoose');
const env = require('./env');

async function connectDatabase() {
    try {
        await mongoose.connect(env.mongodbUri, {
            serverSelectionTimeoutMS: 10000,
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:');
        console.error(error.message);

        throw error;
    }
}

module.exports = {
    connectDatabase,
};

// Sửa khi đổi sang monggodb