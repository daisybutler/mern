const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json([
        {
            user: "daisy",
            age: 24
        },
        {
            user: "mike",
            age: 23
        }
    ])
});

module.exports = router;