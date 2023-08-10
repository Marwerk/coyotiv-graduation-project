const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const roomSchema = new mongoose.Schema({
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', autopopulate: { maxDepth: 1 } },
  type: String,
  doorNumber: Number,
  units: Number,
  capacity: Number,
  amenities: [String],
  // TODO ask Armagan if it's necessary to keep the bookings in the room model + hotel model
  bookings: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', autopopulate: { maxDepth: 1 } },
  ],
})

class Room {
  isAvailable(checkIn, checkOut) {
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)

    return this.bookings.every(booking => {
      const bookingStart = new Date(booking.checkInDate)
      const bookingEnd = new Date(booking.checkOutDate)

      return checkInDate >= bookingEnd || checkOutDate <= bookingStart
    })
  }
}

// ------------------------------------------------------------------------

roomSchema.plugin(autopopulate)
roomSchema.loadClass(Room)
module.exports = mongoose.model('Room', roomSchema)

// TODO: I am able to create two instances of overlapping bookings, which is possible because suiteRoom has 2 units available.
// I am also able to store a third booking that has no overlap, but I am not able to store a fourth booking that has no overlap.
// In my mind, this means that the second booking instance is not updating the # of rooms available once it "expires".
// Check how that is happening in the code of the first booking instance to see how it expires and updates the # of rooms available.
