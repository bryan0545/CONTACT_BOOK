const mongoose = require('mongoose');
const URI = process.env.CONTACTS_URI 
    ? process.env.CONTACTS_URI
    : 'mongodb://localhost/contactsbackup';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', ()=>{console.log("*** DB is connected ***")})    





