const express = require('express')
const { render } = require('pug')
const Booking = require('../booking')

const router = express.Router()

/* GET users listing. */
// this is a Request handler
// it listens to all get requests that go to '/'
// e.g. http://localhost:4000/users

router.get('/', function (req, res, next) {
  res.send(Booking.list)
})

/* POST users listing. */
// this is a Request handler
// it listens to all post requests that go to '/'
// e.g. http://localhost:4000/users

router.post('/', function (req, res, next) {
  const booking = Booking.create({ guest: req.body.guest })

  res.send(booking)
})

module.exports = router
