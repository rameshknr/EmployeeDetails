const express = require('express')
const router = express.Router();
const controller = require('../api/employeeDetails');
const verifyToken = require('../middlewares/verifyToken')
const apiAdapter = require('../gateway/apiAdapter')

const BASE_URL = 'http://localhost:8009'
const api = apiAdapter(BASE_URL)

router.post('/',verifyToken,controller.addEmployee)
router.get('/',controller.getEmployee,(req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })
router.get('/:id',controller.getEmployeeById,(req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })
router.put('/:id',controller.updateEmployeeById)
router.delete('/:id',controller.deleteEmployeeById)
module.exports = router;