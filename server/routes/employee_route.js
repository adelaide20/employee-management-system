const express = require("express");
const router = express.Router();

const { newEmployee, allEmployees, oneEmployee, updateEmployee } = require('../controller/employee_ctlr.js')

router.post('/new', newEmployee);

router.get('/all', allEmployees);

router.get('/one/:emp_id', oneEmployee);

router.put('/edit/:emp_id', updateEmployee);

module.exports = router