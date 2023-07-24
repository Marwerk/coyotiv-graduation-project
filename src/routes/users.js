const express = require('express')

const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([{ name: 'John Doe' }, { name: 'Jane Doe' }, { name: 'Jim Doe' }])

  return

  res.render('users', {
    user: {
      name: 'John Doe',
    },
    users: [{ name: 'John Doe' }, { name: 'Jane Doe' }, { name: 'Jim Doe' }],
  })
})

module.exports = router
