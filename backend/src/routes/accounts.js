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

module.exports = router
