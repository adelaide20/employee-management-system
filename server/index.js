const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


// importing db configuration
require('./config/db.config')

// basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Employee Management System' })
})

// employee routes
app.use('/api', require('./routes/employee_route.js'));


// listening to the port
app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}`)
})