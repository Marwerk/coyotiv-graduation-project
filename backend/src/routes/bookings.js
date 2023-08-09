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
  const rooms = await Room.find({ type: req.body.type })

  const availableRooms = rooms.filter(room => room.isAvailable(req.body.checkIn, req.body.checkOut))

  if (availableRooms.length === 0) {
    res.status(400).send('No rooms available')
    return
  }

  const room = availableRooms[0]

  const booking = await currentUser.book(room, req.body.checkIn, req.body.checkOut)
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
