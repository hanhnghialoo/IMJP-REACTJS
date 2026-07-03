const express = require('express');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes)
module.exports = app;