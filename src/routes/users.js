const express = require('express')

const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([{ name: 'John' }, { name: 'Doe' }])
})

module.exports = router
