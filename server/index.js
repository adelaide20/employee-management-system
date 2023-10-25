const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


// basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Employee Management System' })
})

// listening to the port
app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}.`)
})