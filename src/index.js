const chalk = require('chalk')
const User = require('./model/user')
const Hotel = require('./model/hotel')
const Booking = require('./model/booking')

const hotel1 = new Hotel('Las Calas', 'Asuncion, PY', 7)

const user1 = new User('Marvin', 'Werkmeister', '555-555-5555', 'marvin.blerg@gmail.com', 'Timbuktustrasse 5', 'Berlin')
const user2 = new User('Federico', 'Carrillo', '666-666-666', 'federico.blerg@gmail.com', 'Timbuktustrasse 6', 'Berlin')

// user1 books a room @ hotel1, passes itself as a parameter to the booking constructor

const booking1 = user1.book(hotel1)
const booking2 = user2.book(hotel1)

console.log(hotel1.bookings)
console.log(hotel1)
