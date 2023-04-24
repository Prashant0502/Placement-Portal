const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection;

db.on('err',console.error.bind(console, "error connection to DB"));

db.once('open',function(){
    console.log("connected to DB MONGO DB of placement page")
})

module.exports = db;