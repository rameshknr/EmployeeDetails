const express = require('express')
const router = express.Router();
const controller = require('../api/employeeDetails');
const verifyToken = require('../middlewares/verifyToken')

router.post('/',verifyToken,controller.addEmployee)
router.get('/',controller.getEmployee)
router.get('/:id',controller.getEmployeeById)
router.put('/:id',controller.updateEmployeeById)
router.delete('/:id',controller.deleteEmployeeById)
module.exports = router;