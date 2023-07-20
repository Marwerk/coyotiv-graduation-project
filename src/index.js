const chalk = require('chalk')
const Guest = require('./model/guest')
const Room = require('./model/room')
const Hotel = require('./model/hotel')
const Booking = require('./model/booking')

const guest1 = new Guest(
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
