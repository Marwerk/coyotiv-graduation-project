const express = require('express')
const Room = require('../models/room')

const router = express.Router()

router.get('/:name', async function (req, res, next) {
  const allRooms = await Room.find()
  res.send(allRooms)
})

router.post('/', async function (req, res, next) {
  const room = await Room.create({
    type: req.body.type,
    capacity: req.body.capacity,
    units: req.body.units,
    amenities: req.body.amenities,
  })

  res.send(room)
})

// ------------------------------------------------------------------------

module.exports = router
