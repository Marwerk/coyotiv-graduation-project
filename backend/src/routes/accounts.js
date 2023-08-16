const express = require('express')

const router = express.Router()
const passport = require('passport')

const User = require('../models/user')

// TODO: add nested urls like /accounts/session in other files
router.get('/session', async function (req, res, next) {
  res.send(req.session)
})

router.post(
  '/session',
  passport.authenticate('local', { failWithError: true }),
  function (req, res) {
    res.send(req.user)
  }
)

router.delete('/session', async function (req, res, next) {
  await req.logout()

  req.session.regenerate(err => {
    if (err) next(err)
    res.sendStatus(200)
  })
})

module.exports = router
