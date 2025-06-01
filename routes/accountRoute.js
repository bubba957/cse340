
// Needed Resources 
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
const regValidate = require("../utilities/account-validation")
// Go to the login page
router.get("/login", utilities.handleErrors(accountController.buildLogin))
// Go to the registration page
router.get("/registration", utilities.handleErrors(accountController.buildRegistration))
// Register a new account
router.post("/register", utilities.handleErrors(accountController.registerAccount))
// Build management view
router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildManagement))

// Process the registration data
router.post(
  "/register",
  regValidate.registationRules(),
  regValidate.checkRegData,
  utilities.handleErrors(accountController.registerAccount)
)

// Process the login request
router.post(
  "/login",
  regValidate.loginRules(),
  regValidate.checkLoginData,
  utilities.handleErrors(accountController.accountLogin)
)

// // Process the management request
// router.post(
//   "/management",
//   regValidate.managementRules(),
//   regValidate.checkManData,
//   utilities.handleErrors(accountController.accountLogin)
// )

module.exports = router;