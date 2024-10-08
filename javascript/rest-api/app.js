const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer'); // Import multer

const app = express();
const bcrypt = require('bcryptjs');
const url = 'mongodb+srv://bhadreshbavaliyatops:ZjU1Q1NwLItdM0ps@cluster0.pae29.mongodb.net/tops?retryWrites=true&w=majority&appName=Cluster0';

// Set up multer for handling form-data
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the multer middleware to parse multipart/form-data
app.use(upload.none()); // This will parse the fields from multipart form data

app.use('/', require('./router/std'));

// Function to connect to MongoDB and start the server
const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');

        // Start the server only after MongoDB is connected
        app.listen(3000, () => {
            console.log('App is working');
        });
    } catch (error) {
        console.log('Error connecting to MongoDB:', error.message);
    }
};

// Call the function to connect and start the server
connectDB();
