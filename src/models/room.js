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
  // checkAvailability(checkIn, checkOut) {
  //   if (this.units = 0) {
  //     return false
  //   }
  //
  //   // Loop over each existing booking to check for date overlap
  //   for (let i = 0; i < this.units.length; i += 1) {
  //     const booking = this.units[i]
  //
  //     // TODO: this checking of overlapping dates only makes sense if we have separate rooms, because in the current scenario
  //     // we have only one type of room, so while there are rooms available, we can have multiple bookings at the same time
  //
  //     // check if the requested dates overlap with an existing booking
  //     if (checkIn < booking.checkOutDate && checkOut > booking.checkInDate) {
  //       return false
  //     }
  //   }
  //
  //   // If there are rooms available and no overlap in dates, return true
  //   return true
  // }
}

// ------------------------------------------------------------------------

roomSchema.plugin(autopopulate)
roomSchema.loadClass(Room)
module.exports = mongoose.model('Room', roomSchema)
