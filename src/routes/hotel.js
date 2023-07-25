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
  const hotel = Hotel.create({ name: req.body.name })

  res.send(hotel)
})

// TODO: we've delegated the process of new user creation to the user class
module.exports = router
