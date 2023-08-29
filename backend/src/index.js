const axios = require('axios')
const { response } = require('express')
const chalk = require('chalk')
const EventBus = require('./events/event-bus')
const Booking = require('./models/booking')

axios.defaults.baseURL = 'http://localhost:3000'

// ------------------------------------------------------------------------ //

async function main() {
  const allUsers = await axios.get('/users')
  console.log(chalk.bgGreenBright('----> List of all users <----'), allUsers.data)

  const marvinBooking = await axios.post('/bookings', {
    type: 'suite',
    checkIn: '2023-09-01',
    checkOut: '2023-09-05',
    user: allUsers.data[0]._id,
  })
  // CREATE INSTANCES
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
}

main()

// ------------------------------------------------------------------------ //
