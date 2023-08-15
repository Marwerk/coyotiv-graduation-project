const express = require('express')

const router = express.Router()

const User = require('../models/user')

// TODO: add nested urls like /accounts/session in other files
router.get('/session', async function (req, res, next) {
  res.send(req.session)
})

router.post('/', async function (req, res, next) {
  const { name, email, password } = req.body

  const user = new User({ name, email })
  await user.setPassword(password)
  await user.save()

  try {
    const user = await User.create(req.body)
    req.session.user = user
    res.send(user)
  } catch (err) {
    next(err)
  }
})

module.exports = router
