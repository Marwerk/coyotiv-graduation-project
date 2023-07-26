const express = require('express')
const Hotel = require('../hotel')

const router = express.Router()

/* GET Hotel listing */
// Server-side route that listens for GET request
// src/index.js:43 for Client-side request
router.get('/:name', function (req, res, next) {
  const currentHotel = Hotel.list.find(hotel => hotel.name === req.params.name)
  res.send(currentHotel)
})

/* POST Hotel listing */
// Server-side route that listens for POST request
// src/index.js:8 for Client-side request
router.post('/', function (req, res, next) {
  const hotel = Hotel.create({
    name: req.body.name,
    location: req.body.location,
    rooms: req.body.rooms,
  })

  res.send(hotel)
})

// router.get('/', function (req, res, next) {
//   res.send(Hotel.list)
// })

module.exports = router
