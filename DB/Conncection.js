
const mongoose = require('mongoose');

const URI = "mongodb+srv://renan:renan@cluster0-ri9wb.mongodb.net/test?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

const connectDB = async () => {
    //mongoose.connect(URI, { useUnifiedTopology: true,  useNewUrlParser: true });
    //console.log('>>>> ! DB CONNECTED... ! <<<<')
    mongoose.connect( URI, { 
        useUnifiedTopology: true, useNewUrlParser: true,  
        useCreateIndex: true, 
       }, () => { console.log("SUCCESS: MONGO CONNECTED...")}).catch(err => console.log('MONGO ERROR' + err));
};

let db = mongoose.connection;
module.exports = connectDB;
