const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000

var cors = require('cors')


var corsOptions = {
    origin: '*',
    allowCredentials: "true",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

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
app.use('/api', require('./routes/employee_route'));

// auth routes
app.use('/auth', require('./routes/auth_route'));


// listening to the port
app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}`)
})