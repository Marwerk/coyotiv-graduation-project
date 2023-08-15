const express = require('express')
const User = require('../models/user')

const router = express.Router()

//  GET Route Handler
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})

// POST Route Handler

router.post('/', async function (req, res, next) {
  const { name, email, password } = req.body

  const user = await User.register({ name, email }, password)

  res.status(201).send(user)
})

// TODO PATCH Route Handler

// TODO DELETE Route Handler

// ------------------------------------------------------------------------ //

module.exports = router
