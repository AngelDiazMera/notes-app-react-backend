// you need to execute mongod on a terminal

const mongoose = require('mongoose');

// process access to our SO
// const uri = process.env.MONGODB_URI 
// ? process.env.MONGODB_URI //MONGODB_URI is an enviroment variable that were defined on .env
// : 'mongodb://localhost/databasetest';
const uri = "mongodb+srv://angel:Df3si1ee.@datastorage.ovu5a.mongodb.net/mernstack?retryWrites=true&w=majority";

// mongoose connects to our db
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
});

mongoose.set('useFindAndModify', false);

// store the connection
const connection = mongoose.connection;

// once open, arrow function is excecuted
connection.once('open', () => {
    console.log('DB is connected');
})