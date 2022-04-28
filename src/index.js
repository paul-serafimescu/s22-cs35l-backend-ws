/**
 * simple pizza ordering service
 * express + mongodb via mongoose
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const orderRouter = require('./orderRouter');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/orders', orderRouter);

app.get('/', async function (req, res) {
    res.send('Hello, world!');
});

app.listen(port, () => console.log(`server listening on port ${port}`));
