const express = require('express')
const Room = require('../models/room')

const router = express.Router()

//  GET Route Handler
router.get('/', async function (req, res, next) {
  const allRooms = await Room.find()
  res.send(allRooms)
})

// POST Route Handler
router.post('/', async function (req, res, next) {
  const roomTypeExists = await Room.findOne({ type: req.body.type })

  if (roomTypeExists) {
    res.status(200).send(roomTypeExists)
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

// TODO PATCH Route Handler

// TODO DELETE Route Handler

// ------------------------------------------------------------------------ //

module.exports = router
