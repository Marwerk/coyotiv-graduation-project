const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Booking = require('./booking')
const Hotel = require('./hotel')

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
      // throw new Error('Invalid booking dates')
      return console.log('Invalid booking dates')
    }

    // Check if the hotel has rooms available for the selected dates
    // TODO: struggling a bit to understand this. A check in overlapping dates would only make sense
    // when there are no more rooms available, in order to return the earliest available date, right?

    if (roomType.checkAvailability(roomType, checkInDate, checkOutDate)) {
      const newBooking = await Booking.create({ guest: this, roomType, checkInDate, checkOutDate })

      // TODO remove ._id
      roomType.bookings.push(newBooking._id)

      await roomType.decreaseAvailability()
      await roomType.save()

      // TODO remove ._id
      this.bookings.push(newBooking._id)
      await this.save()

      // TODO: related to the TODO in the room model, line 10
      // Hotel.bookings.push(newBooking._id)
      // await this.save()

      console.log(
        `Dear ${this.firstName}, your booking has been confirmed from ${checkIn} to ${checkOut}.
        The total price is $${newBooking.totalPrice}`
      )
      return newBooking
    }

    return console.log(
      `We're sorry ${this.firstName}, there are no rooms available for the selected dates`
    )
  }
}

// ------------------------------------------------------------------------ //

userSchema.plugin(autopopulate)
userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)
