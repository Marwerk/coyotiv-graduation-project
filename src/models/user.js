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
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
})

class User {
  async book(hotel, checkIn, checkOut) {
    // Convert check-in and check-out dates to Date objects
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)

    // Check if the dates are valid before creating a booking
    if (checkInDate >= checkOutDate) {
      return console.log('Invalid booking dates')
    }

    // Check if the hotel has rooms available for the selected dates
    if (hotel.checkAvailability(checkInDate, checkOutDate)) {
      const newBooking = await Booking.create({ guest: this, hotel, checkInDate, checkOutDate })
      hotel.bookings.push(newBooking._id)
      await hotel.save()
      hotel.decreaseAvailability()
      this.bookings.push(newBooking._id)
      await this.save()

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

// ------------------------------------------------------------------------

userSchema.plugin(autopopulate)
userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)
