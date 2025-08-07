const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// Route to handle form submission
const formRoute = require('./routes/formRoute');

const adminRoute = require('./routes/adminRoute');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/forms', formRoute);

app.use('/api/admin', adminRoute);
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined in environment variables.');
    process.exit(1);
}


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });