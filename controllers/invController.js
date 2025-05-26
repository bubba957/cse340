const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid, 
  })
}

// /* ***************************
//  *  Build inventory by vehicle view
//  * ************************** */
// invCont.buildByClassificationName = async function (req, res, next) {
//   const vehicle_name = req.params.vehicle_name
//   const v = await invModel.getInventoryByClassificationName(vehicle_name)
//   const view = await utilities.buildClassificationView(v)
//   let item = await utilities.getNav()
//   const itemName = data[0].vehicle_name
//   res.render("./inventory/vehicle", {
//     title: itemName + " vehicles",
//     item,
//     view, 
//   })
// }

module.exports = invCont