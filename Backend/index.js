const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db');

const app = express();
const PORT = process.env.PORT || 5000; // Ensure PORT is defined

const rootRouter = require('./routes/routes'); // Ensure the path is correct

app.use(cors());
app.use(express.json());

app.use('/api/v1', rootRouter); // Mount the root router

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
