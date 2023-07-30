const mongoose = require('mongoose')

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24

const bookingSchema = new mongoose.Schema({
  guest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  checkInDate: Date,
  checkOutDate: Date,
})
class Booking {
  get totalPrice() {
    const pricePerNight = 100

    const differenceInMilliseconds = this.checkOutDate - this.checkInDate
    const differenceInDays = differenceInMilliseconds / MILLISECONDS_IN_A_DAY

    return differenceInDays * pricePerNight
  }
}
// ------------------------------------------------------------------------
// module.exports = Booking

bookingSchema.loadClass(Booking)
module.exports = mongoose.model('Booking', bookingSchema)
