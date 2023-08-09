const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Booking = require('./booking')
const Hotel = require('./hotel')
const Room = require('./room')

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
  async book(roomType, checkIn, checkOut) {
    // Convert check-in and check-out dates to Date objects
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)

    // Check if the dates are valid before creating a booking
    if (checkInDate >= checkOutDate) {
      return console.log('Invalid booking dates')
    }

    // fetch rooms by room type
    const rooms = await Room.find({ type: roomType })

    // Check if the hotel has rooms available for the selected dates
    rooms.map(async room => {
      // Check if the hotel has rooms available for the selected dates
      if (await room.checkAvailability(checkInDate, checkOutDate)) {
        const newBooking = await Booking.create({
          guest: this,
          room,
          checkInDate,
          checkOutDate,
        })

        // TODO remove ._id
        room.bookings.push(newBooking._id)
        await room.decreaseAvailability()
        await room.save()

        // TODO remove ._id
        this.bookings.push(newBooking._id)
        await this.save()

        // Update the hotel's bookings
        const hotel = await Hotel.findOne()
        hotel.bookings.push(newBooking._id)
        await hotel.save()

        console.log(
          `Dear ${this.firstName}, your booking has been confirmed from ${checkIn} to ${checkOut}.
        The total price is $${newBooking.totalPrice}`
        )
        return newBooking
      }
      return console.log(
        `We're sorry ${this.firstName}, there are no rooms available for the selected dates`
      )
    })
  }
}

// ------------------------------------------------------------------------ //

userSchema.plugin(autopopulate)
userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)
