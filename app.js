const express = require('express')
const app = express();
const cors = require('cors')
const logger = require('morgan')
const db = require('mongoose')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

const DB_URL = require('./config').appConfig.DB_URL;
const router = require('./route');
const employee = require('./route/employeeDetails');

const options = {
    swaggerOptions: {
      authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} }
    }
};


db.connect(DB_URL,{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false },(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database connected successfully....");
    }
});
app.use(logger('tiny'));
app.use(express.json());
app.use(cors());
app.use('/api/auth',router);
app.use('/api/v1/employee',employee);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument,options));

module.exports = app;