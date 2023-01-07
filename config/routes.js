const express = require("express")
const router = express.Router()
const user = require("../app/controllers/user")
const book = require("../app/controllers/book")

// This configuration is used to navigate to all other routes
// This way is easy to find the navigation of the route

router.use("/user" , consoleThis , user)
router.use("/book" , book)


// consoleThis is a function, and here it act as a middleware
// middleware is a function, 
//will be used in the cases where you want to check some header or somthing before you hit the further route.
// You can break the connection in here as well, if you don't want to go further.
// Sending res.status(200).send() from middleware function
// We cn create any number of middleware, Usually we need to place it under the folder app named as middleware

function consoleThis(req, res, next){
    console.log("Console first, Then navigate to route")
    next()
}

module.exports = router