const express = require('express')
const { render } = require('pug')
const Booking = require('../booking')

const router = express.Router()

router.get('/', function (req, res, next) {
  res.send(Booking.list)
})

router.post('/', function (req, res, next) {
  const booking = Booking.create({ guest: req.body.guest })

  res.send(booking)
})

module.exports = router
