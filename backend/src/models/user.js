const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
const EventBus = require('../events/eventBus')
const Hotel = require('./hotel')
const Booking = require('./booking')

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  address: String,
  city: String,
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
      autopopulate: { maxDepth: 1 },
    },
  ],
})

class User {
  async book(room, checkIn, checkOut) {
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)

    EventBus.on('booking', user => {
      console.log('start of booking creation')
      Booking.create({
        guest: user,
        room: 'single',
        checkInDate: '2020-01-01',
        checkOutDate: '2020-01-02',
      })
      console.log('booking created')
    })
    const booking = EventBus.emit('booking')

    this.bookings.push(booking)
    await this.save()

    room.bookings.push(booking)
    await room.save()

    const hotel = await Hotel.findOne({ _id: room.hotel })
    hotel.bookings.push(booking)
    await hotel.save()

    return booking
  }
}

// ------------------------------------------------------------------------ //

userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)
