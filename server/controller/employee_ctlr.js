const pool = require('../config/db.config.js');

// add a new employee
exports.newEmployee = async(request, response) => {

    const employee = {
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        contactno: request.body.contactno,
        emp_role: parseInt(request.body.emp_role),
        start_date: request.body.start_date
    }

    // verify that all fields are filled
    if (!(employee.first_name || employee.last_name || employee.email || employee.contactno || employee.emp_role || employee.start_date)) {
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
        pool.query(`INSERT INTO employees (first_name, last_name, email, contactno, emp_role, start_date) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [employee.first_name, employee.last_name, employee.email, employee.contactno, employee.emp_role, employee.start_date],
            (error, results) => {
                if (error) {
                    throw error
                }
                response.status(201).send('Employee added successfully')
            })
    } catch (error) {
        response.status(400).json({
            message: "Failed to add an employee",
            error: error
        });
    }

}


// get all employees
exports.allEmployees = (request, response) => {
    pool.query(`SELECT e.emp_id, e.email, e.first_name, e.last_name, e.contactno, r.position, es.status, e.start_date, e.end_date
    FROM employees as e, roles as r, empStatus as es
    WHERE e.emp_role = r.role_id 
    AND e.emp_status = es.status_id
    ORDER BY e.first_name ASC;`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
}


// get one employee
exports.oneEmployee = (request, response) => {

    const emp_id = request.params.emp_id;

    pool.query(`SELECT e.emp_id, e.email, e.first_name, e.last_name, e.contactno, r.position, es.status, e.start_date, e.end_date
        FROM employees as e, roles as r, empStatus as es
        WHERE e.emp_role = r.role_id 
        AND e.emp_status = es.status_id
        AND e.emp_id = $1`, [emp_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
}


// update/edit employee details
exports.updateEmployee = (request, response) => {

    const emp_id = request.params.emp_id;

    const details = {
        email: request.body.email,
        contactno: request.body.contactno,
        emp_role: parseInt(request.body.emp_role),
        emp_status: parseInt(request.body.emp_status),
        end_date: request.body.end_date
    }

    try {
        pool.query(`UPDATE employees
        SET email = $1, contactno = $2, emp_role = $3, emp_status = $4, end_date = $5
        WHERE emp_id = ${emp_id}`, [details.email, details.contactno, details.emp_role, details.emp_status, details.end_date],
            (error, results) => {
                if (error) {
                    throw error;
                }
                response.status(200).json("Employee modified");
            }
        );
    } catch (error) {
        response.status(400).json({
            message: "Failed to modify employee details",
            error: error
        });
    }
}


// delete an employee
exports.deleteEmployee = (request, response) => {
    const emp_id = request.params.emp_id;

    var datetime = new Date();
    console.log(datetime);

    let removed = true;

    try {
        pool.query(`UPDATE employees
        SET removed = ${removed}, end_date = ${datetime}
        WHERE emp_id = ${emp_id}`,
            (error, results) => {
                if (error) {
                    throw error;
                }
                response.status(200).json("Employee removed");
            }
        );
    } catch (error) {
        response.status(400).json({
            message: "Failed to remove employee",
            error: error
        });
    }
}