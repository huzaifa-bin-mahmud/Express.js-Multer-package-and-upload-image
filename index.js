const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

require("dotenv").config();

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on localhost:${process.env.PORT}`);
});
