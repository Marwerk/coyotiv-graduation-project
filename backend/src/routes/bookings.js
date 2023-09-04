const express = require('express')
const Booking = require('../models/booking')
const User = require('../models/user')
const Room = require('../models/room')

const router = express.Router()

/* GET all bookings */
router.get('/', async function (req, res, next) {
  res.send(await Booking.find())
})

/* POST new booking */
router.post('/', async function (req, res, next) {
  try {
    const currentUser = await User.findById(req.body.user)
    const rooms = await Room.find({ type: req.body.type })

    const availableRooms = rooms.filter(room =>
      room.isAvailable(req.body.checkIn, req.body.checkOut)
    )

    // // temporal logs for debugging
    // console.log('User:', currentUser)
    // console.log('Requested Room Type:', req.body.type)
    // console.log('Check-In:', req.body.checkIn)
    // console.log('Check-Out:', req.body.checkOut)
    // console.log('Available Rooms:', availableRooms)

    if (availableRooms.length === 0) {
      console.log('No rooms available')
      res.status(400).send('No rooms available')
    } else {
      const room = availableRooms[0]

      const booking = await currentUser.book(room, req.body.checkIn, req.body.checkOut)

      res.send(booking)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

/* DELETE booking by ID */
router.delete('/:bookingId', async function (req, res, next) {
  const deleteBooking = await Booking.findByIdAndDelete(req.params.bookingId)
  res.send(deleteBooking)
})

// PATCH route handler to update a booking by ID
router.put('/:bookingId', async function (req, res, next) {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.bookingId,
      { checkIn: req.body.checkIn, checkOut: req.body.checkOut },
      { new: true }
    )

    if (!updatedBooking) {
      res.status(404).send('Booking not found')
      return
    }

    res.send(updatedBooking)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while updating')
  }
})

// ------------------------------------------------------------------------ //

module.exports = router
