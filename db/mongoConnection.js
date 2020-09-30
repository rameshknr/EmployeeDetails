const DB_URL = require('../config').appConfig.DB_URL;

const db = require('mongoose')

 db.connect(DB_URL,{ useNewUrlParser: true ,useUnifiedTopology: true },(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Database connected successfully....");
        }
     });


module.exports = db;