const express = require("express")
const router = express.Router()

// This routes hits when called -> https://example.com/book/ -> GET METHOD
router.get("/" , (req, res) => {
    // Your code goes here
    res.status(200).send("Can send object / array / string, hits / route GET")
})

// This routes hits when called -> https://example.com/book/123 -> GET METHOD
router.get("/:bookId" , (req, res) => {
    // Your code goes here
    console.log(req.params.bookId)//can get bookId from request
    res.status(200).send("Can send object / array / string, /:bookId route")
})

// This routes hits when called -> https://example.com/book/fantasy/vivek -> GET METHOD
router.get("/:genre/:author" , (req, res) => {
    // Your code goes here
    console.log(req.params.genre,req.params.author ) //can get bookId from request
    res.status(200).send("Can send object / array / string, /:genre/:author route")
})

// This routes hits when called -> https://example.com/book/ -> POST METHOD
router.post("/", (req, res) => {
    // Your code goes here
    console.log(req.body) // req.body is an object where it holds your data
    res.status(200).send("Can send object / array / string, / route POST")
})

// This routes hits when called -> https://example.com/book/ -> PUT METHOD
router.put("/", (req, res) => {
    // Your code goes here
    console.log(req.body) // req.body is an object where it holds your data
    res.status(200).send("Can send object / array / string, / route PUT")
})

// This routes hits when called -> https://example.com/book/123 -> DELETE METHOD
router.delete("/:bookId", (req, res) => {
    // Your code goes here
    console.log(req.body) // req.body is an object where it holds your data
    res.status(200).send("Can send object / array / string, / route DELETE")
})

module.exports = router