const pool = require('../config/db.config.js');

// add a new employee
exports.newEmployee = async(request, response) => {

    const employee = {
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        contactNo: request.body.contactNo,
        emp_role: request.body.emp_role,
        start_date: request.body.start_date,
        photo: request.body.photo
    }

    // verify that all fields are filled
    if (!(employee.first_name || employee.last_name || employee.email || employee.contact || employee.emp_role || employee.start_date)) {
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
        pool.query(`INSERT INTO employees (first_name, last_name, email, contactNo, emp_role, start_date, photo) 
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [employee.first_name, employee.last_name, employee.email, employee.contactNo, employee.emp_role, employee.start_date, employee.photo],
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
exports.updateStatus = (request, response) => {

    const emp_id = request.params.emp_id;

    const { emp_status } = request.body;

    try {
        pool.query(`UPDATE employement
        SET emp_status = $1
        WHERE employee = ${emp_id}`, [emp_status],
            (err, result) => {
                if (err) {
                    //If payments are not available is not available
                    console.error(err);
                    return res.status(500).json({
                        error: "Database error",
                    });
                } else {
                    res.status(200).send({ error: "suceesfully updated" });
                }
            }
        );
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error while creating post!", //Database connection error
        });
    }
}


// delete an employee
exports.deleteEmployee = (request, response) => {
    const employee = {
        emp_id: request.body.emp_id,
        emp_status: request.body.emp_status,
        end_date: request.body.end_date
    }}
