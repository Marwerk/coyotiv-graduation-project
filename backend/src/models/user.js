const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
const Booking = require('./booking')
const Hotel = require('./hotel')
const Room = require('./room')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
      autopopulate: { maxDepth: 2 },
    },
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

    room.bookings.push(booking)
    await room.save()

    const hotel = await Hotel.findOne({ _id: room.hotel._id || room.hotel })
    hotel.bookings.push(booking)
    await hotel.save()

    return booking
  }

  async cancelBooking(booking) {
    // cancel the booking
    await Booking.findByIdAndDelete(booking._id)

    // remove booking from User
    const userBookingIndex = this.bookings.indexOf(booking._id)
    this.bookings.splice(userBookingIndex, 1)

    // remove booking from Room
    // if (!booking.room) {
    //   throw new Error('Booking does not have an associated room.')
    // }
    // const roomInstance = await Room.findById(booking.room)
    // const roomBookingIndex = roomInstance.bookings.indexOf(booking._id)
    // roomInstance.bookings.splice(roomBookingIndex, 1)
    // await roomInstance.save()

    // update(save) User and Room
    await this.save()

    return booking
  }
}

// ------------------------------------------------------------------------ //

userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)
