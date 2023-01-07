const express = require("express")
const router = express.Router()

// This routes hits when called -> https://example.com/user/singin -> GET METHOD
router.get("/singin" , (req, res) => {
    // Your code goes here
    res.status(200).send("Can send object / array / string, hits /singin route GET")
})

// This routes hits when called -> https://example.com/user/signup -> GET METHOD
router.get("/signup" , (req, res) => {
    // Your code goes here
    res.status(200).send("Can send object / array / string, /signup route")
})

// This routes hits when called -> https://example.com/user/ -> POST METHOD
router.post("/", (req, res) => {
    // Your code goes here
    console.log(req.body) // req.body is an object where it holds your data
    res.status(200).send("Can send object / array / string, / route POST")
})

module.exports = router