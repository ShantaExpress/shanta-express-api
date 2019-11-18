var mongoose = require('mongoose');
let config = require('./config/config');

// var localDb = "mongodb://127.0.0.1:27017/ecommerce";
const mongoURI = config.mongoDbUri;
// const mongoURI = localDb;
console.log('connecting to : ', mongoURI);
mongoose.connect(mongoURI);
const conn = mongoose.createConnection(mongoURI);


module.exports.conn = conn;
module.exports.url = mongoURI;