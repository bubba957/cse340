// Needed Resources 
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
// Go to the login page
router.get("/login", utilities.handleErrors(accountController.buildLogin))
// Go to the registration page
router.get("/registration", utilities.handleErrors(accountController.buildRegistration))
// Register a new account
router.post('/register', utilities.handleErrors(accountController.registerAccount))

module.exports = router;