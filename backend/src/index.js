const axios = require('axios')
const { response } = require('express')
const chalk = require('chalk')

axios.defaults.baseURL = 'http://localhost:3000'

// ------------------------------------------------------------------------ //

async function main() {
  // DROP DB
  // await axios.get('/drop-db')

  // CREATE
  const hotelLasCalas = await axios.post('/hotels', {
    name: 'LasCalas',
    location: 'Asuncion, PY',
    bookings: [],
  })

  const roomDouble1 = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'double',
    doorNumber: 1,
    capacity: 2,
    amenities: ['wifi', 'tv', 'air conditioning'],
  })
  const roomDouble2 = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'double',
    doorNumber: 3,
    capacity: 2,
    amenities: ['wifi', 'tv', 'air conditioning'],
  })

  const roomSingle1 = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'single',
    doorNumber: 2,
    capacity: 2,
    amenities: ['wifi', 'tv', 'air conditioning'],
  })
  const roomSingle2 = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'single',
    doorNumber: 5,
    capacity: 2,
    amenities: ['wifi', 'tv', 'air conditioning'],
  })
  const roomSingle3 = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'single',
    doorNumber: 7,
    capacity: 2,
    amenities: ['wifi', 'tv', 'air conditioning'],
  })

  const roomSuite1 = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'suite',
    doorNumber: 4,
    capacity: 2,
    amenities: ['wifi', 'tv', 'air conditioning'],
  })
  const roomSuite2 = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'suite',
    doorNumber: 6,
    capacity: 2,
    amenities: ['wifi', 'tv', 'air conditioning'],
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

  const numan = await axios.post('/users', {
    firstName: 'Numan',
    lastName: 'Duman',
    phoneNumber: '888-888-8888',
    email: 'numan.blerg@gmail.com',
    address: 'Timbuktustrasse 8',
    city: 'Berlin',
    bookings: [],
  })

  const marvinBooking = await axios.post('/bookings', {
    type: 'suite',
    checkIn: '2023-09-01',
    checkOut: '2023-09-05',
    user: marvin.data._id,
  })

  const federicoBooking = await axios.post('/bookings', {
    type: 'suite',
    checkIn: '2023-09-01',
    checkOut: '2023-09-05',
    user: federico.data._id,
  })

  const numanBooking = await axios.post('/bookings', {
    type: 'suite',
    checkIn: '2023-09-12',
    checkOut: '2023-09-13',
    user: numan.data._id,
  })

  const marvinBooking2 = await axios.post('/bookings', {
    type: 'suite',
    checkIn: '2023-09-05',
    checkOut: '2023-09-06',
    user: marvin.data._id,
  })

  // DELETE
  // const deleteFedericoBooking = await axios.delete(`/bookings/${federicoBooking.data._id}`)

  // READ
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

// ------------------------------------------------------------------------ //
