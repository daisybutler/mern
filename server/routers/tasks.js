const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

// Define the schema for db models
const taskSchema = new mongoose.Schema({
    title: String,
    complete: Boolean
});

// create new db model. pass in a) schema b) model name
const Task = mongoose.model('Task', taskSchema);

// The root router, eg api/users for this router, 
// will return the documents in the Student model.
router.get('/', async (req, res) => {
    try {
      const found = await Task.find({});
      res.send(found);
    } catch (err) {
      console.log("Error occurred, " + err);
      res.send("Some error occurred!");
    }
});

// send values to the model we just created
router.post('/addtask', async (req, res) => {
  const data = req.body;
  const task = new Task({
      title: data.title,
      complete: data.complete
  });
  try {
    await task.save();
    console.log("One entry added");
    const updatedTasks = await Task.find({});
    res.status(200).json(updatedTasks);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
})

module.exports = router;