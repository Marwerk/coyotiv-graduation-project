const express = require('express')
const { render } = require('pug')
const Booking = require('../booking')

const router = express.Router()

/* GET Booking listing. */
router.get('/', function (req, res, next) {
  res.send(Booking.list)
})

/* POST Booking listing. */
router.post('/', function (req, res, next) {
  const booking = Booking.create({
    guest: req.body.guest,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
  })
  res.send(booking)
})

module.exports = router
