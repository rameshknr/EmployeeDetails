const dbMongo = require('mongoose')
const schema = dbMongo.Schema

const employeeDetailsSchema = new schema({
    EmployeeId: {
        type: String,
        required: true,
        unique:true
    },
    EmployeeCode: String,
    EmployeeName: String,
    EmployeeDesignation: String,
    EmployeeDepartment: String,
    EmployeeAddress: String
});

module.exports = dbMongo.model('employeeDetail',employeeDetailsSchema);