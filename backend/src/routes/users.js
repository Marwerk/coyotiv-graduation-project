const express = require('express')

const router = express.Router()

const User = require('../models/user')

// Get all users
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})

// Post new user
router.post('/', async function (req, res, next) {
  const { name, email, password } = req.body

  const user = await User.register({ name, email }, password)

  res.status(201).send(user)
})

// TODO PATCH Route Handler

// TODO DELETE Route Handler

// ------------------------------------------------------------------------ //

module.exports = router
