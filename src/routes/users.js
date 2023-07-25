const express = require('express')
const { render } = require('pug')
const User = require('../user')
const Hotel = require('../hotel')
const Booking = require('../booking')

const router = express.Router()

/* GET users listing. */
// this is a Request handler
// it listens to all get requests that go to '/'
// e.g. http://localhost:4000/users

router.get('/', function (req, res, next) {
  res.send(User.list)
})

/* POST users listing. */
// this is a Request handler
// it listens to all post requests that go to '/'
// e.g. http://localhost:4000/users

router.post('/', function (req, res, next) {
  const user = User.create({ firstName: req.body.firstName })

  res.send(user)
})

module.exports = router
