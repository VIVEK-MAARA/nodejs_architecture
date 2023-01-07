const express = require('express') // EXpress is a library, used to handle API in a easy way for nodejs
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config() // Can access env values using, process.env.keyname
const bodyParser = require('body-parser')
const router = require('./config/routes')

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors()) // cors is used to allow the http request to our server
app.use(express.json())
app.use('/' , router) // This is the root of the route '/' ", 

const port = 3001
app.listen(port || 3001, () => {
    console.log(`Listening on port ${port}`)
})

// To run app, need to install nodejs in ur system
// To execute the app run ==> node index.js