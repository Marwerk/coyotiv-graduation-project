/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
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
      console.log('Booking created for:', currentUser.name)
      res.send(booking)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

/* DELETE booking by ID */
// eslint-disable-next-line consistent-return
router.delete('/:bookingId', async function (req, res, next) {
  const booking = await Booking.findById(req.params.bookingId)
  console.log('Booking owner:', booking.email)

  if (!booking) return next({ status: 404, message: 'Booking not found' })

  // Additional step to check the associated room and remove the booking from its bookings array
  const room = await Room.findOne({ bookings: booking._id })
  if (room) {
    room.bookings.pull(booking._id)
    await room.save()
  }

  if (req.user.email !== booking.guest.email)
    return next({ status: 403, message: 'User is not the owner of this booking' })

  await booking.guest.cancelBooking(booking)

  res.send({ message: 'Booking deleted successfully', booking })
})

// PUT route handler to UPDATE a booking by ID
router.put('/:bookingId', async function (req, res, next) {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.bookingId,
      { checkInDate: req.body.checkIn, checkOutDate: req.body.checkOut },
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
