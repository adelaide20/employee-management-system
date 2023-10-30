const express = require("express");
const router = express.Router();

const { newEmployee, allEmployees, oneEmployee } = require('../controller/employee_ctlr.js')

router.post('/new', newEmployee);

router.get('/all', allEmployees);

router.get('/one/:emp_id', oneEmployee);


module.exports = router