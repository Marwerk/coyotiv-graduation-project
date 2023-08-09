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
  async checkAvailability(checkIn, checkOut) {
    console.log('Checking availability for:', checkIn, 'to', checkOut)

    const currentDate = new Date()
    let overlappingBookings = 0

    // Loop through the bookings array
    for (let i = 0; i < this.bookings.length; i += 1) {
      const booking = this.bookings[i]

      // If the bookings has expired, remove it from the array and save
      if (booking.checkOutDate < currentDate) {
        this.increaseAvailability()
        this.bookings.pull(booking)
      }

      // Count overlapping bookings
      else if (checkIn <= booking.checkOutDate && checkOut >= booking.checkInDate) {
        console.log('Overlap detected.')
        overlappingBookings += 1
      }
    }

    // Check if there are enough rooms available
    if (overlappingBookings > this.units) {
      console.log('No rooms available.')
      return false
    }

    console.log('Room available.')
    return true
  }

  async decreaseAvailability() {
    if (this.units > 0) {
      this.units -= 1
      await this.save()
      console.log('Room availability decreased')
    }
  }

  async increaseAvailability() {
    this.units += 1
    await this.save()
    console.log('Room availability increased')
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
