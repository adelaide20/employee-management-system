const express = require("express");
const router = express.Router();

const { newEmployee, allEmployees } = require('../controller/employee_ctlr.js')

router.post('/new', newEmployee)

router.get('/all', allEmployees)


module.exports = router