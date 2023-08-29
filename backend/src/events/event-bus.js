const EventEmitter = require('events')

const eventBus = new EventEmitter()

eventBus.on('booking:creating', () => {
  console.log('MEEP MEEP CREATING BOOKING')
})

eventBus.on('booking:created', payload => {
  console.log('CREATING BOOKING')
  console.log(payload)
  console.log('BEEP BOOP BOOKING CREATED')
})

module.exports = eventBus
