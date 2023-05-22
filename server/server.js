require("dotenv").config(); 
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const users = require('./routers/users');

app.use('/api/users', users);

// // Define the schema for db models
// const studentSchema = new mongoose.Schema({
//     roll_no: Number,
//     name: String,
//     year: Number,
//     subjects: [String]
// });

// // create new db model. pass in a) schema b) model name
// const Student = mongoose.model('Student', studentSchema);

// app.get('/', async (req, res) => {
//     try {
//       const found = await Student.find({});
//       res.send(found);
//     } catch (err) {
//       console.log("Error occurred, " + err);
//       res.send("Some error occurred!");
//     }
// });

// send values to the model we just created
app.post('/create', async (req, res) => {

    const stud = new Student({
        roll_no: 1001,
        name: 'Madison Hyde',
        year: 3,
        subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
    });
    // the save() method saves the model to the db
    stud
        .save()
        .then(
            () => console.log("One entry added"), 
            (err) => console.log(err)
        );
})

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