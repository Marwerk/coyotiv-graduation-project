const express = require('express')
const User = require('../models/user')

const router = express.Router()

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})

/* POST users listing. */
router.post('/', function (req, res, next) {
  const user = User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    bookings: req.body.bookings,
  })
  res.send(user)
})

// ------------------------------------------------------------------------
module.exports = router
