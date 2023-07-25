const express = require('express')
const { render } = require('pug')
const User = require('../user')

const router = express.Router()

/* GET users listing. */
// this is a Request handler
// it listens to all get requests that go to '/'
router.get('/', function (req, res, next) {
  // http://localhost:4000/users

  // this is a response object that is passed as a parameter to this function, and it has the send method, to send back info
  res.send(User.list)
})

/* POST users listing. */
// this is a Request handler
// it listens to all post requests that go to '/'
router.post('/', function (req, res, next) {
  // http://localhost:4000/users
  const user = User.create(req.body)
  res.send(user)
})

// TODO: we've delegated the process of new user creation to the user class
module.exports = router
