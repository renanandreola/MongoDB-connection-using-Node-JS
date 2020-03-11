
//npm run server
const express = require('express');
const connectDB = require('./DB/Conncection');
const app = express();
const bodyParser = require('body-parser');

connectDB();

app.use(express.json({ extended: false }));
//app.use(bodyParser.json());       // to support JSON-encoded bodies
//app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//  extended: true
//}));

app.use('/api/userModel', require('./Api/User'));

const Port = process.env.Port || 3000;

app.listen(Port,() => console.log('SUCCESS: SERVER STARTED...'));


