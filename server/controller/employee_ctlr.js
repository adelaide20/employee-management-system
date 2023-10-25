const pool = require('../config/db.config.js');


exports.newEmployee = (request, response) => {
    const {first_name ,last_name,email,contactNo} = request.body
  
    pool.query(`INSERT INTO employees (first_name, last_name, email, contactNo) 
    VALUES ($1, $2, $3, $4) RETURNING *`,
     [first_name, last_name, email, contactNo], 
     (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Employee added with ID: ${results.rows[0].id}`)
    })
  }