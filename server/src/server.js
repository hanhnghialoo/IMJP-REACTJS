require('dotenv').config();

const app = require('./app');

const env = require('./config/env');
const { connectDatabase } = require('./config/database');

async function startServer() {
    try {
        await connectDatabase();

        app.listen(env.port, () => {
            console.log(
                `Server running on port ${env.port}`
            );
        });
    } catch (error) {
        console.error(
            'Unable to start server'
        );

        process.exit(1);
    }
}

startServer();