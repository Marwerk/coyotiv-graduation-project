const express = require('express')
const Hotel = require('../models/hotel')

const router = express.Router()

//  GET Route Handler
// TODO replace name with id
router.get('/:name', async function (req, res, next) {
  const currentHotel = await Hotel.find({ name: req.params.name })
  res.send(currentHotel)
})

// POST Route Handler
router.post('/', async function (req, res, next) {
  const hotelExists = await Hotel.findOne()

  if (hotelExists) {
    res.status(200).send(hotelExists)
  } else {
    const hotel = await Hotel.create({
      name: req.body.name,
      location: req.body.location,
      rooms: req.body.rooms,
    })

    res.send(hotel)
  }
})

// TODO PATCH Route Handler

// TODO DELETE Route Handler

// ------------------------------------------------------------------------ //

module.exports = router
