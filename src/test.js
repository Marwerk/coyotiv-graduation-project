const axios = require('axios')
const { response } = require('express')
const chalk = require('chalk')

// Create instances of Hotel, User and Booking
async function main() {
  // Client-side HTTP POST request made to the server
  // src/routes/hotels.js:18 for Server-side response
  const hotelLasCalas = await axios.post('http://localhost:3000/hotels', {
    name: 'LasCalas',
    location: 'Asuncion, PY',
    rooms: 7,
    bookings: [],
  })

  const marvin = await axios.post('http://localhost:3000/users', {
    firstName: 'Marvin',
    lastName: 'Werkmeister',
    phoneNumber: '555-555-5555',
    email: 'marvin.blerg@gmail.com',
    address: 'Timbuktustrasse 5',
    city: 'Berlin',
    bookings: [],
  })

  const federico = await axios.post('http://localhost:3000/users', {
    firstName: 'Federico',
    lastName: 'Carrillo',
    phoneNumber: '888-888-8888',
    email: 'federico.blerg@gmail.com',
    address: 'Timbuktustrasse 8',
    city: 'Berlin',
    bookings: [],
  })

  const marvinBooking = await axios.post('http://localhost:3000/bookings', {
    hotel: hotelLasCalas.data.name,
    user: marvin.data._id,
    checkIn: '2019-01-01',
    checkOut: '2019-01-05',
  })

  const federicoBooking = await axios.post('http://localhost:3000/bookings', {
    hotel: hotelLasCalas.data.name,
    user: federico.data._id,
    checkIn: '2019-01-06',
    checkOut: '2019-01-10',
  })

  // Client-side HTTP GET request made to the server -> hotels.js Ln8 for Server-side response
  const hotelInfo = await axios.get('http://localhost:3000/hotels/LasCalas')
  console.log('----> Fetch Hotel Info & Bookings:', hotelInfo.data)

  const allUsers = await axios.get('http://localhost:3000/users')
  console.log('----> List of all users:', allUsers.data)

  const allBookings = await axios.get('http://localhost:3000/bookings')
  console.log('----> List of all bookings:', allBookings.data)
}

main().catch(error =>
  console.log(chalk.bgRedBright('Error message:', error.data ? error.data : error))
)
