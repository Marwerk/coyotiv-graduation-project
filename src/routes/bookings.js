const express = require('express')
const Booking = require('../models/booking')
const User = require('../models/user')
const Hotel = require('../models/hotel')

const router = express.Router()

/* GET route handler */
router.get('/', async function (req, res, next) {
  res.send(await Booking.find())
})

/* POST route handler */
router.post('/', async function (req, res, next) {
  const currentUser = await User.findOne({ _id: req.body.user })
  const currentHotel = await Hotel.findOne({ name: req.body.hotel })

  const booking = await currentUser.book(currentHotel, req.body.checkIn, req.body.checkOut)
  res.send(booking)
})

/* DELETE route handler */
router.delete('/:id', async function (req, res, next) {
  const deleteBooking = await Booking.findByIdAndDelete(req.params.id)
  res.send(deleteBooking)
})
// ------------------------------------------------------------------------
module.exports = router
