const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const roomSchema = new mongoose.Schema({
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', autopopulate: { maxDepth: 1 } },
  type: String,
  capacity: Number,
  units: Number,
  amenities: [String],
  // TODO ask Armagan if it's necessary to keep the bookings in the room model + hotel model
  bookings: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', autopopulate: { maxDepth: 1 } },
  ],
})

class Room {
  checkAvailability(checkIn, checkOut) {
    if (this.units <= 0) {
      return false
    }
    // Loop over each existing booking to check for date overlap
    for (let i = 0; i < this.units.length; i += 1) {
      const booking = this.units[i]
      // check if the requested dates overlap with an existing booking
      if (checkIn <= booking.checkOutDate && checkOut >= booking.checkInDate) {
        return false
      }
    }
    // If there are rooms available and no overlap in dates, return true
    return true
  }

  async decreaseAvailability() {
    if (this.units > 0) {
      this.units -= 1
      await this.save()
    } else {
      // throw new Error('No rooms available in this date range')
      console.log('No rooms available in this date range')
    }
  }
}

// ------------------------------------------------------------------------

roomSchema.plugin(autopopulate)
roomSchema.loadClass(Room)
module.exports = mongoose.model('Room', roomSchema)
