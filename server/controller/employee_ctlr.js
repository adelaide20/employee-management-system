const pool = require('../config/db.config.js');

// add a new employee
exports.newEmployee = async(request, response) => {

    const employee = {
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        contactNo: request.body.contactNo,
        photo: request.body.photo
    }

    // verify that all fields are filled
    if (!(employee.first_name || employee.last_name || employee.email || employee.contact)) {
        response.send("All fileds are required");
    }

    try {

        // check if employee doesn't exist
        const checkEmployee = await pool.query(
            `SELECT * FROM employees WHERE email = $1`, [employee.email]
        );

        // respose if the employee exists
        if (checkEmployee.rows.length != 0) {
            response.send("employee already exists");
        }

        // add an employee
        pool.query(`INSERT INTO employees (first_name, last_name, email, contactNo, photo) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`, [employee.first_name, employee.last_name, employee.email, employee.contactNo, employee.photo],
            (error, results) => {
                if (error) {
                    throw error
                }
                response.status(201).send('Employee added successfully')
            })
    } catch (err) {
        response.status(400).json({
            message: "Failed to add an employee",
            error: err
        });
    }

}


// get all employees
exports.allEmployees = (request, response) => {
    pool.query(`SELECT * FROM employees ORDER BY first_name ASC`, (error, results) => {
        if (error) {
            return response.status(400).json({
                error: "Error while trying to get employees",
            });
        }
        response.status(200).json(results.rows)
    });
}


// get one employee
exports.oneEmployee = (request, response) => {

    const emp_id = request.params.emp_id;

    pool.query(
        `SELECT * FROM employees where emp_id = $1`, [emp_id],
        (error, results) => {
            if (error) {
                return response.status(400).json({
                    error: "Error while trying to get ann employee",
                });
            }
            response.status(200).json(results.rows)
        })
}


// update employee details
exports.updateEmployee = (request, response) => {

}


// delete an employee
exports.deleteEmployee = (request, response) => {

}