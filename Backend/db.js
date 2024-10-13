const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.mongoURL;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB connected');
    })
    .catch((error) => {
        console.log('Error while connecting to DB', error);
    });
