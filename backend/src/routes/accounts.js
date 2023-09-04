/* eslint-disable consistent-return */
const express = require('express')

const router = express.Router()
const passport = require('passport')

const User = require('../models/user')

router.get('/session', async function (req, res, next) {
  // console.log('The current user is:', req.user)
  res.send(req.user)
})

// Login
router.post(
  '/session',
  passport.authenticate('local', { failWithError: true }),
  (req, res, next) => {
    res.send(req.user)
  }
)

// Logout
router.delete('/session', (req, res, next) => {
  req.logout(() => {
    res.sendStatus(200)
  })
})

// ------------------------------------------------------------------------ //

module.exports = router

// TODO: periodic cleanup of expired sessions in the database
