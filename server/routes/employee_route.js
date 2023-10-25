const express = require("express");
const router = express.Router();

const {newEmployee} = require('../controller/employee_ctlr.js')

router.post('/new', newEmployee)


module.exports = router
