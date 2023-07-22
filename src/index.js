const chalk = require('chalk')
const User = require('./model/user')
const Hotel = require('./model/hotel')
const Booking = require('./model/booking')

// Las Calas Hotel instance is declared
const hotelLasCalas = new Hotel('Las Calas', 'Asuncion, PY', 7)

// Users are declared
const marvinW = new User(
  'Marvin',
  'Werkmeister',
  '555-555-5555',
  'marvin.blerg@gmail.com',
  'Timbuktustrasse 5',
  'Berlin'
)
const federicoC = new User(
  'Federico',
  'Carrillo',
  '666-666-666',
  'federico.blerg@gmail.com',
  'Timbuktustrasse 6',
  'Berlin'
)

// Users book the hotel / A booking instance is created
const booking1 = marvinW.book(hotelLasCalas)
const booking2 = federicoC.book(hotelLasCalas)

console.log(hotelLasCalas.bookings)

hotelLasCalas.cancelBooking('marvin.blerg@gmail.com')

console.log(hotelLasCalas.rooms)
