const express = require('express');
const cors = require('cors');

const env = require('./config/env');
const candidateRoutes = require('./modules/candidate/candidate.routes');

const app = express();

app.use(
    cors({
        origin: env.clientUrl,
    })
);

app.use(express.json());

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
    });
});

app.use('/api/v1/candidates', candidateRoutes)

app.use((req, res) => {
    return res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
});

app.use((error, req, res, next) => {
    console.error(error);

    return res.status(500).json({
        success: false,
        message: 'Internal server error',
    });
});
module.exports = app;