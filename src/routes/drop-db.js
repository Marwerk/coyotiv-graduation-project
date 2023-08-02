const express = require('express')
const chalk = require('chalk')

const router = express.Router()
const User = require('../models/user')
const Booking = require('../models/booking')
const Hotel = require('../models/hotel')
const Rooms = require('../models/room')

router.get('/', async function (req, res, next) {
  await User.deleteMany()
  await Booking.deleteMany()
  await Hotel.deleteMany()
  await Rooms.deleteMany()

  res.send(console.log(chalk.bgRedBright('Deleted all users and posts')))
})

module.exports = router
