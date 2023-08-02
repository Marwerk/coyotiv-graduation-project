const axios = require('axios')
const { response } = require('express')
const chalk = require('chalk')

axios.defaults.baseURL = 'http://localhost:3000'

// ------------------------------------------------------------------------

async function main() {
  // DROP DB
  await axios.get('/drop-db')

  // CREATE
  const hotelLasCalas = await axios.post('/hotels', {
    name: 'LasCalas',
    location: 'Asuncion, PY',
    // rooms: 7,
    bookings: [],
  })

  const doubleRoom = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'double',
    capacity: 2,
    units: 2,
    amenities: ['wifi', 'tv', 'air conditioning'],
  })

  const singleRoom = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'single',
    capacity: 1,
    units: 3,
    amenities: ['wifi', 'tv', 'air conditioning'],
  })

  const suiteRoom = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'suite',
    capacity: 2,
    units: 2,
    amenities: ['wifi', 'tv', 'air conditioning', 'balcony'],
  })

  const marvin = await axios.post('/users', {
    firstName: 'Marvin',
    lastName: 'Werkmeister',
    phoneNumber: '555-555-5555',
    email: 'marvin.blerg@gmail.com',
    address: 'Timbuktustrasse 5',
    city: 'Berlin',
    bookings: [],
  })

  const federico = await axios.post('/users', {
    firstName: 'Federico',
    lastName: 'Carrillo',
    phoneNumber: '888-888-8888',
    email: 'federico.blerg@gmail.com',
    address: 'Timbuktustrasse 8',
    city: 'Berlin',
    bookings: [],
  })

  const marvinBooking = await axios.post('/bookings', {
    type: doubleRoom.data.type,
    checkIn: '2019-01-01',
    checkOut: '2019-01-05',
    user: marvin.data._id,
  })

  const federicoBooking = await axios.post('/bookings', {
    type: suiteRoom.data.type,
    checkIn: '2019-01-06',
    checkOut: '2019-01-10',
    user: federico.data._id,
  })

  // const deleteFedericoBooking = await axios.delete(`/bookings/${federicoBooking.data._id}`)

  const allUsers = await axios.get('/users')
  console.log(chalk.bgGreenBright('----> List of all users <----'), allUsers.data)

  const allBookings = await axios.get('/bookings')
  console.log(chalk.bgGreenBright('----> List of all bookings <----'), allBookings.data)

  const allRooms = await axios.get('/rooms')
  console.log(chalk.bgGreenBright('----> List of all rooms <----'), allRooms.data)

  const hotelInfo = await axios.get('/hotels/LasCalas')
  console.log(chalk.bgGreenBright('----> Fetch Hotel Info & Bookings <----'), hotelInfo.data)
}

main().catch(error =>
  console.log(chalk.bgRedBright('Error message:', error.data ? error.data : error))
)

// -------------------------------Legacy Code------------------------------

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

// //   ------------ Tests for Hotel --------------

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
