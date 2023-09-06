const express = require('express')
const Room = require('../models/room')

const router = express.Router()

// Simple example of async in the blow below:
// the Room.find() returns a "promise" from the DB, a promise that will resolve to an array of rooms, once that data is available (within the DB).
// We can "await" that promise and then send (res.send()) the result back to the client.
// The res.send() method won't be called until the promise is resolved :) cute, right?

// GET all rooms
router.get('/', async function (req, res, next) {
  const allRooms = await Room.find()
  res.send(allRooms)
})

// POST a room, if the room number already exists, return that existing room (prevents creation of rooms that already exist by checking their door number)
router.post('/', async function (req, res, next) {
  const roomNumberExists = await Room.findOne({
    doorNumber: req.body.doorNumber,
  })

  if (roomNumberExists) {
    res.status(200).send(roomNumberExists)
  } else {
    const room = await Room.create({
      hotel: req.body.hotel,
      type: req.body.type,
      doorNumber: req.body.doorNumber,
      capacity: req.body.capacity,
      units: req.body.units,
      amenities: req.body.amenities,
      bookings: [],
    })

    await room.hotel.addRoom(room)
    res.status(201).send(room)
  }
})

// PATCH a room
router.patch('/:id', async function (req, res, next) {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).send(room)
  } catch (error) {
    res.status(400).send(error)
  }
})

// DELETE a room
router.delete('/:id', async function (req, res, next) {
  try {
    await Room.findByIdAndDelete(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(400).send(error)
  }
})

// ------------------------------------------------------------------------ //

module.exports = router
