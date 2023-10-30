const Pool = require('pg').Pool

const pool = new Pool({
    user: 'adelaide',
    host: 'localhost',
    database: 'ems',
    password: 'password123',
    port: 5432,
})

// testing the connection

pool.connect((err, ) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    } else {
        console.log("connected to the database");
    }
})
module.exports = pool;