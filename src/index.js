const chalk = require('chalk')
const User = require('./model/user')
const Hotel = require('./model/hotel')
const Booking = require('./model/booking')

const user1 = new User(
  1,
  'Marvin',
  'Werkmeister',
  '017672274578',
  'marvin.blerg@gmail.com',
  'Timbuktustraße 3',
  'Berlin',
  'PayPal',
  '2023-07-19'
)

const booking1 = new Booking(1, 1, 1, '2021-01-01', '2021-01-03', 2, 200, 'confirmed')
const booking2 = new Booking(2, 1, 2, '2021-01-01', '2021-01-03', 1, 100, 'confirmed')
