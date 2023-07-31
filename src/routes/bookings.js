const express = require('express')
const Booking = require('../models/booking')
const User = require('../models/user')
const Hotel = require('../models/hotel')

const router = express.Router()

/* GET Booking listing. */
router.get('/', async function (req, res, next) {
  res.send(await Booking.find())
})

/* POST Booking listing. */
router.post('/', async function (req, res, next) {
  // const currentUser = await User.findOne({ email: req.body.email })
  const currentUser = await User.findOne({ _id: req.body.user })
  const currentHotel = await Hotel.findOne({ name: req.body.hotel })

  const booking = await currentUser.book(currentHotel, req.body.checkIn, req.body.checkOut)
  res.send(booking)
})

// ------------------------------------------------------------------------
module.exports = router
