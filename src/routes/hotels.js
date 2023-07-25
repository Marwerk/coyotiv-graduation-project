const express = require('express')

const router = express.Router()
const { render } = require('pug')
const Hotel = require('../hotel')

/* GET Hotel listing. */
router.get('/', function (req, res, next) {
  res.send('get Hotel listing')
})

/* POST Hotel listing. */
router.post('/', function (req, res, next) {
  const hotel = Hotel.create({ name: req.body.name })

  res.send(hotel)
})

module.exports = router
