const express = require('express');
const app = express();
const users = require('./routers/users');

app.use('/api/users', users);

// app.set('view engine', 'pug');

// app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.send('hello word')
});

const port = process.env.PORT || 8000;

app.listen(+port, () => {
    console.log(`Listening on http://localhost:${port}`)
});