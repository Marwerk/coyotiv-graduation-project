const express = require('express')
const Booking = require('../models/booking')
const User = require('../models/user')
const Room = require('../models/room')

const router = express.Router()

/* GET route handler */
router.get('/', async function (req, res, next) {
  res.send(await Booking.find())
})

/* POST route handler */
router.post('/', async function (req, res, next) {
  const currentUser = await User.findOne({ _id: req.body.user })
  const roomType = await Room.findOne({ type: req.body.type })

  // find all the rooms by given room type
  // loop over all the rooms
  // room.isAvailable()
  // if room is available return true
  // use available room ( assisgn the room to a variable)
  // call the user.book()

  const booking = await currentUser.book(roomType, req.body.checkIn, req.body.checkOut)
  res.send(booking)
})

/* DELETE route handler */
router.delete('/:id', async function (req, res, next) {
  const deleteBooking = await Booking.findByIdAndDelete(req.params.id)
  res.send(deleteBooking)
})

// TODO PATCH Route Handler

// TODO DELETE Route Handler

// ------------------------------------------------------------------------ //

module.exports = router
