// const chalk = require('chalk')
const axios = require('axios')
const { response } = require('express')

// const User = require('./model/user')
// const Hotel = require('./model/hotel')

// fetch users with axios

axios.get('http://localhost:3000/users').then(response => {
  console.log(response.data)
})

// Las Calas Hotel instance is declared
// const hotelLasCalas = new Hotel('Las Calas', 'Asuncion, PY', 7)

// User instances are declared
// const marvin = new User(
//   'Marvin',
//   'Werkmeister',
//   '555-555-5555',
//   'marvin.blerg@gmail.com',
//   'Timbuktustrasse 5',
//   'Berlin'
// )
// const federico = new User(
//   'Federico',
//   'Carrillo',
//   '888-888-8888',
//   'federico.blerg@gmail.com',
//   'Timbuktustrasse 8',
//   'Berlin'
// )
// const dr4gonSt4r = new User('Dr4gon', 'St4r', '999-999-9999', 'dr4gon.blerg@gmail.com', 'Timbuktustrasse 9', 'Berlin')

// User creates a booking (instance), which is added to the hotel's bookings array
// const booking1 = marvin.book(hotelLasCalas, '2019-01-01', '2019-01-05')
// const booking2 = federico.book(hotelLasCalas, '2019-01-06', '2019-01-10')

// Test for booking availability
// const booking3 = dr4gonSt4r.book(hotelLasCalas, '2019-01-01', '2019-01-05')
// const booking2 = federico.book(hotelLasCalas)

// Cancel a booking using email as ID and free up a room
// hotelLasCalas.cancelBooking('marvin.blerg@gmail.com')

// / ----- /// TEST YARD /// ---- ///
// console.log(`
// ------------ Tests for Booking --------------
// booking1 should have a Guest: ${booking1.guest ? chalk.green('✓') : chalk.red('✗')}
// `)

// console.log(`
// ------------ Tests for Guest --------------
// Guest Marvin should have an email: ${marvin.email ? chalk.green('✓') : chalk.red('✗')}
// `)

// console.log(`

//   ------------ Tests for Hotel --------------

//   Las Calas Aparthotel has ${
//     hotelLasCalas.rooms > 0 ? chalk.green(hotelLasCalas.rooms) : chalk.red(hotelLasCalas.rooms)
//   } rooms available

//   ------------------/////--------------------

//   These are the current bookings in Las Calas Aparthotel:
// `)

// hotelLasCalas.bookings.forEach((booking, i) => {
//   console.log(`
//   Booking ${i + 1}:
//   Guest: ${booking.guest.firstName} ${booking.guest.lastName}
//   Check-in date: ${booking.checkInDate.toISOString().slice(0, 10)}
//   Check-out date: ${booking.checkOutDate.toISOString().slice(0, 10)}

//   ------------------/////--------------------`)
// })
