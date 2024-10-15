// server.js
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const Staff = require('./models/staffModel');
const Bill = require('./models/billModel');
const Customer = require('./models/customerModel');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// MongoDB connection URI (Replace <username>, <password>, and <dbname> with your credentials)
const uri = 'mongodb+srv://tpavimalini:<db_password>@cluster0.4udfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Define your MongoDB collection (e.g., 'staff' collection in 'myDatabase')
    const database = client.db('myDatabase'); // Replace with your database name
    const collection = database.collection('staff'); // Replace with your collection name

    // API endpoint to add a new staff member
    app.post('/addStaff', async (req, res) => {
      const staffData = req.body;

      try {
        const result = await collection.insertOne(staffData); // Insert staff into the collection
        res.status(201).send(result);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error adding staff');
      }
    });

    // API endpoint to get all staff members
    app.get('/getStaff', async (req, res) => {
      try {
        const staff = await collection.find({}).toArray(); // Fetch all staff data
        res.status(200).json(staff);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching staff');
      }
    });

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

connectToMongoDB();

