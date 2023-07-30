const mongoose = require('mongoose')

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24

const bookingSchema = new mongoose.Schema({
  guest: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  checkInDate: Date,
  checkOutDate: Date,
})
class Booking {
  constructor(guest, checkInDate, checkOutDate) {
    this.guest = guest
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
  }

  get totalPrice() {
    const pricePerNight = 100

    const differenceInMilliseconds = this.checkOutDate - this.checkInDate
    const differenceInDays = differenceInMilliseconds / MILLISECONDS_IN_A_DAY

    return differenceInDays * pricePerNight
  }

  static create({ hotel, checkInDate, checkOutDate }) {
    console.log('Creating a new Booking...', { hotel, checkInDate, checkOutDate })
    const booking = new Booking(hotel, checkInDate, checkOutDate)

    Booking.list.push(booking)
    return booking
  }

  static list = []
}
// ------------------------------------------------------------------------
// module.exports = Booking
module.exports = mongoose.model('Booking', bookingSchema)
