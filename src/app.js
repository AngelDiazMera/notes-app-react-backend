const express = require('express');
const cors = require('cors');
const app = express();

// settings: server config
app.set('port', process.env.PORT || 4000); // Is like a variable 'port': depoyAppPort || 4000

// middlewares: functions excecuted before it enters to the routes
app.use(cors()); // thus, you can send and retrieve data from server
app.use(express.json()); // now server can understand JSON files

// routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;