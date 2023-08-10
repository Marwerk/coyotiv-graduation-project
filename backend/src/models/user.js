const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Booking = require('./booking')

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  address: String,
  city: String,
  bookings: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', autopopulate: { maxDepth: 1 } },
  ],
})

class User {
  async book(room, checkIn, checkOut) {
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)


    const booking = await Booking.create({
      guest: this,
      room,
      checkInDate,
      checkOutDate,
    })

    this.bookings.push(booking)
    await this.save()

    // TODO: this is where the app crashes
    // when a third booking that overlaps with the first two is created, it the app crashes and the server returns a socket hangup error
    // /app/src/models/user.js:34
    //  room.bookings.push(booking)
    //      ^
    //  TypeError: Cannot read properties of undefined (reading 'bookings')
    //  at model.book (/app/src/models/user.js:34:10)
    room.bookings.push(booking)
    await room.save()

    return booking

  }
}

// ------------------------------------------------------------------------ //

userSchema.plugin(autopopulate)
userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)
