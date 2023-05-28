require("dotenv").config(); 
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const tasks = require('./routers/tasks');

// Parse JSON request bodies
app.use(bodyParser.json());

// Parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/tasks', tasks);

const port = process.env.PORT || 8000;

app.listen(+port, () => {
    console.log(`Listening on http://localhost:${port}`)
});

// Connect to MongDB
mongoose.connect(
    process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);