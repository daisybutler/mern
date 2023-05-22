const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

// Define the schema for db models
const studentSchema = new mongoose.Schema({
    roll_no: Number,
    name: String,
    year: Number,
    subjects: [String]
});

// create new db model. pass in a) schema b) model name
const Student = mongoose.model('Student', studentSchema);

// The root router, eg api/users for this router, 
// will return the documents in the Student model.
router.get('/', async (req, res) => {
    try {
      const found = await Student.find({});
      res.send(found);
    } catch (err) {
      console.log("Error occurred, " + err);
      res.send("Some error occurred!");
    }
});

module.exports = router;