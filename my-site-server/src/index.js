const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const apiRouter = require('./routes');

const app = express();
const port = 80;

app.use(express.static(path.resolve(__dirname, '../../my-site/dist')));
app.use('/storage', express.static(path.resolve(__dirname, 'storage')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1', apiRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));