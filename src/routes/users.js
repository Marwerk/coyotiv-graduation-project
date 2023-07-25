const express = require('express')
const { render } = require('pug')
const User = require('../user')
const Hotel = require('../hotel')
const Booking = require('../booking')

const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list)
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
  })
  res.send(user)
})

/* POST users book a room */
router.post('/bookings', function (req, res, next) {
  const userEmail = req.body.email
  const user = User.list.find(user => user.email === userEmail)

  // Check if the user exists
  if (!user) return res.status(404).send('User not found')

  // Create a new booking with the provided dates
  const booking = user.book(req.body.checkIn, req.body.checkOut)

  res.send(booking)
})

// ------------------------------------------------------------------------
module.exports = router
