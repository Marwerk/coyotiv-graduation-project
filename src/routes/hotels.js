const express = require('express')
const { render } = require('pug')
const Hotel = require('../hotel')

const router = express.Router()

/* GET Hotel listing. */
router.get('/', function (req, res, next) {
  res.send(Hotel.list)
})

/* POST Hotel listing. */
router.post('/', function (req, res, next) {
  const hotel = Hotel.create({ name: req.body.name, location: req.body.location, rooms: req.body.rooms })

  res.send(hotel)
})

module.exports = router
