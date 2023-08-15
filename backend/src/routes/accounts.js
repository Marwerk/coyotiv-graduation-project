const express = require('express')

const router = express.Router()

const User = require('../models/user')

// TODO: add nested urls like /accounts/session in other files
router.get('/session', async function (req, res, next) {
  res.send(req.session)
})

router.post('/', async function (req, res, next) {
  const { name, email, password } = req.body

  const user = await User.register({ name, email }, password)

  res.send(user)
})

module.exports = router
