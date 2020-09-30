const employeeModel = require('../model/employeeDetails')
const {v4} = require('uuid')

const addEmployee = ((req,res)=>{
    let employee = new employeeModel();
    employee.EmployeeId = v4()
    employee.EmployeeCode = req.body.EmployeeCode
    employee.EmployeeName = req.body.EmployeeName
    employee.EmployeeDesignation = req.body.EmployeeDesignation
    employee.EmployeeDepartment = req.body.EmployeeDepartment
    employee.EmployeeAddress = req.body.EmployeeAddress

    employee.save((err,doc)=>{
        if(err){
            res.status(500).send({error: err});
        }else{
            res.send({message : 'Employee Detail inserted successfully...'})
        }
    })
})

const getEmployee = ((req,res)=>{
    employeeModel.find((err,doc)=>{
        if(err){
            res.status(404).send({error: err});
        }else{
            res.send(doc)
        }
    });
})

const getEmployeeById = ((req,res)=>{
    employeeModel.findOne({EmployeeId:req.params.id},(err,doc)=>{
   // employeeModel.find((err,doc)=>{    
        if(err){
            res.status(404).send({error: err});
        }else{
            res.send(doc)
        }
    });
})

const updateEmployeeById= ((req,res)=>{
    employeeModel.findOneAndUpdate({EmployeeId:req.params.id},{
        EmployeeCode : req.body.EmployeeCode,
        EmployeeName : req.body.EmployeeName,
        EmployeeDesignation : req.body.EmployeeDesignation,
        EmployeeDepartment : req.body.EmployeeDepartment,
        EmployeeAddress : req.body.EmployeeAddress
    },(err,doc)=>{    
        if(err){
            res.status(404).send({error: err});
        }else{
            res.send({message : 'Employee Detail updated successfully...'})
        }
    });    
});

const deleteEmployeeById= ((req,res)=>{
    employeeModel.findOneAndDelete({EmployeeId:req.params.id},(err,doc)=>{
        if(err){
            res.status(404).send({error: err});
        }else{
            res.send({message : 'Employee Detail deleted successfully...'})
        }
    });
});

module.exports ={
    addEmployee,
    getEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById
}