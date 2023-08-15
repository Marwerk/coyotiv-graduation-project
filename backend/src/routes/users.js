const express = require('express')
const User = require('../models/user')

const router = express.Router()

//  GET Route Handler
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})

// POST Route Handler
router.post('/', async function (req, res, next) {
  const userExists = await User.findOne({ firstName: req.body.firstName })

  if (userExists) {
    res.status(200).send(userExists)
    console.log('User already exists')
  } else {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      city: req.body.city,
    })

    res.status(201).send(user)
  }
})

// TODO PATCH Route Handler

// TODO DELETE Route Handler

// ------------------------------------------------------------------------ //

module.exports = router
