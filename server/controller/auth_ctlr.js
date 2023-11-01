const pool = require('../config/db.config');
const adminData = require('../database/admin_mock');
const config = require("../config/auth.config")
const fs = require('fs')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


// registering an admin 
exports.register = async(request, response) => {

    let admin = {
        'email': 'admin@shaper.co.za',
        'password': 'admin123'
    }

    const salt = await bcrypt.genSalt()
    password = await bcrypt.hash(admin.password, salt)


    pool.query(`INSERT INTO users (email, password) 
    VALUES ($1, $2) RETURNING *`, [admin.email, password], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Admin added succesfuly`)
    })
}


// admin login
exports.login = async(request, response) => {
    // 1. variable holding the data enter 
    const data = {
        email: req.body.email,
        password: req.body.password
    }

    // 2. check if the user exists
    const user = await pool.query(
        `
                SELECT * FROM users WHERE email = $1 `, [data.email]
    );

    // 3. if the user doesn't exist then send a response
    if (user.rows.length === 0) {
        res.status(401).send({
            status: 'Failed',
            message: 'employee not found, make sure you entered correct details'
        });
    } else {
        // 4. Comparing the passwords
        bcrypt.compare(data.password, user[0].password, (err, result) => { //Comparing the passwords
            if (err) {
                res.status(500).json({
                    error: "Server error",
                });
            } else if (result === true) { //Checking if credentials match
                // 4. generate a token
                const token = jwt.sign({
                    id: user.id
                }, config.secret, {
                    expiresIn: 86400 //24 hours
                });
                res.status(200).json({
                    message: "Signed in successfully!",
                    token: token,


                });

            } else {
                //Declaring the errors
                if (result != true)
                    res.status(400).json({
                        error: "incorect email or password",
                    });
            }
        })



    }
}