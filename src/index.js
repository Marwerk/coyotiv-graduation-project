const chalk = require('chalk')
const User = require('./model/user')
const Hotel = require('./model/hotel')
const Booking = require('./model/booking')


const user1 = new User('Marvin', 'Werkmeister', '555-555-5555', 'marvin.blerg@gmail.com', 'Timbuktustrasse 5', 'Berlin')
const hotel1 = new Hotel('Las Calas', 'Asuncion, PY', 7)

const
