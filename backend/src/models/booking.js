const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24

const bookingSchema = new mongoose.Schema(
  {
    guest: { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: { maxDepth: 1 } },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', autopopulate: { maxDepth: 2 } },
    checkInDate: String,
    checkOutDate: String,
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
)
class Booking {
  get totalPrice() {
    const pricePerNight = 100

    const checkInDate = new Date(this.checkInDate)
    const checkOutDate = new Date(this.checkOutDate)

    const differenceInMilliseconds = checkOutDate - checkInDate
    const differenceInDays = differenceInMilliseconds / MILLISECONDS_IN_A_DAY

    return differenceInDays * pricePerNight
  }
}

// ------------------------------------------------------------------------

bookingSchema.plugin(autopopulate)
bookingSchema.loadClass(Booking)
module.exports = mongoose.model('Booking', bookingSchema)
