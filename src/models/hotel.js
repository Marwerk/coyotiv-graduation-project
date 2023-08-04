const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room', autopopulate: { maxDepth: 1 } }],
  bookings: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', autopopulate: { maxDepth: 1 } },
  ],
})

class Hotel {
  async addRoom(room) {
    this.rooms.push(room)
    await this.save()
  }
}

// ------------------------------------------------------------------------ //

hotelSchema.plugin(autopopulate)
hotelSchema.loadClass(Hotel)
module.exports = mongoose.model('Hotel', hotelSchema)
