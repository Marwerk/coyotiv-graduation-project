const express = require('express')
const { restart } = require('nodemon')
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
  try {
    const currentUser = User.list.find(user => user.email === req.body.email)
    const currentHotel = Hotel.list.find(hotel => hotel.name === req.body.hotel)

    const booking = currentUser.book(currentHotel, req.body.checkIn, req.body.checkOut)
    console.log(booking)
    res.send(booking)
    currentUser.bookings.push('Booking ID##', booking.checkInDate, booking.checkOutDate)
    // in the future, in the line above, instead of currentHotel.name, we would use a booking ID
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
})

// ------------------------------------------------------------------------
module.exports = router
