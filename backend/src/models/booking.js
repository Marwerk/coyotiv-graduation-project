const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const EventBus = require('../events/event-bus')

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24

const bookingSchema = new mongoose.Schema({
  guest: { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: { maxDepth: 1 } },
  checkInDate: String,
  checkOutDate: String,
})
class Booking {
  get totalPrice() {
    const pricePerNight = 100

    const differenceInMilliseconds = this.checkOutDate - this.checkInDate
    const differenceInDays = differenceInMilliseconds / MILLISECONDS_IN_A_DAY

    return differenceInDays * pricePerNight
  }

  static startListening() {
    EventBus.on('booking', user => {
      console.log('start of booking creation')
      Booking.create({
        guest: user,
        room: 'single',
        checkInDate: '2020-01-01',
        checkOutDate: '2020-01-02',
      })
      console.log('booking created')
    })
    return true
  }
}

// ------------------------------------------------------------------------

bookingSchema.plugin(autopopulate)
bookingSchema.loadClass(Booking)
module.exports = mongoose.model('Booking', bookingSchema)

// EventBus.on('booking', () => {
//   console.log('start of booking creation')
//   // Booking.create({
//   //   guest: user,
//   //   room: 'single',
//   //   checkInDate: '2020-01-01',
//   //   checkOutDate: '2020-01-02',
//   // })
//   console.log('booking created')
// })
