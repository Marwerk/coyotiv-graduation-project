const express = require('express')
const Room = require('../models/room')

const router = express.Router()

router.get('/', async function (req, res, next) {
  const allRooms = await Room.find()
  res.send(allRooms)
})

router.post('/', async function (req, res, next) {
  const roomTypeExists = await Room.findOne({ type: req.body.type })

  if (roomTypeExists) {
    res.status(200).send(roomTypeExists)
    console.log('Room type already exists')
  } else {
    const room = await Room.create({
      hotel: req.body.hotel,
      type: req.body.type,
      capacity: req.body.capacity,
      units: req.body.units,
      amenities: req.body.amenities,
    })

    await room.hotel.addRoom(room)
    res.status(201).send(room)
  }
})

// ------------------------------------------------------------------------

module.exports = router
