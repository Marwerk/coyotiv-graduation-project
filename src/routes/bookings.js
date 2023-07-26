const express = require('express')
const Booking = require('../booking')
const User = require('../user')
const Hotel = require('../hotel')

const router = express.Router()

/* GET Booking listing. */
router.get('/', function (req, res, next) {
  res.send(Booking.list)
})

/* POST Booking listing. */
router.post('/', function (req, res, next) {
  const currentUser = User.list.find(user => user.email === req.body.email)
  const currentHotel = Hotel.list.find(hotel => hotel.name === req.body.hotel)

  const booking = currentUser.book(currentHotel, req.body.checkIn, req.body.checkOut)
  res.send(booking)

  // currentUser.bookings.push(booking)
  // above line causes same error as in src/user.js:29
})

// TODO: push the new booking to the users bookings array

// ------------------------------------------------------------------------
module.exports = router
