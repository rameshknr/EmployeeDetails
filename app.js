const express = require('express')
const app = express();
const cors = require('cors')
const logger = require('morgan')
const db = require('mongoose')
const swaggerUi = require('swagger-ui-express');
var bodyParser = require('body-parser');

const DB_URL = require('./config').appConfig.DB_URL;
const router = require('./route');
const employee = require('./route/employeeDetails');
const swaggerDocument = require('./swagger/swagger.json');

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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/auth',router);
app.use('/api/v1/employee',employee);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})


module.exports = app;