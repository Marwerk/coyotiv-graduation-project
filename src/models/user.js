const mongoose = require('mongoose')
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
  book(hotel, checkIn, checkOut) {
    // Convert check-in and check-out dates to Date objects
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)

    // Check if the dates are valid before creating a booking
    if (checkInDate >= checkOutDate) {
      return console.log('Invalid booking dates')
    }

    // Check if the hotel has rooms available for the selected dates
    if (hotel.checkAvailability(checkInDate, checkOutDate)) {
      const newBooking = Booking.create({ hotel: this, checkInDate, checkOutDate })
      hotel.bookings.push(newBooking)
      hotel.decreaseAvailability()
      this.bookings.push('Booking ID#', newBooking.checkInDate, newBooking.checkOutDate)

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

module.exports = mongoose.model('User', userSchema)
