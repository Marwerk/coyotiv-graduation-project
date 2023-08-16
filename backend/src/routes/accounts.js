const express = require('express')

const router = express.Router()
const passport = require('passport')
const User = require('../models/user')

router.get('/session', async function (req, res, next) {
  if (!req.user) return next({ status: 401, message: 'Not logged in!' })
  console.log('the current user is', req.user)
  res.send(req.user)
})

router.post(
  '/session',
  passport.authenticate('local', { failWithError: true }),
  function (req, res) {
    res.send(req.user)
  }
)

router.delete('/session', function (req, res) {
  req.logout(() => {
    res.sendStatus(200)
  })
})
// router.delete('/session', (req, res) => {
//   // return to appease the eslint overlords
//   return req.logout(err => {
//     if (err) return res.sendStatus(500)

//     // return to appease the eslint overlords
//     return req.session.destroy(error => {
//       return error ? res.sendStatus(500) : res.sendStatus(200)
//     })
//   })
// })

// ------------------------------------------------------------------------ //

module.exports = router

// TODO: periodic cleanup of expired sessions in the database
