const Booking = require('./booking')

class User {
  constructor(firstName, lastName, phoneNumber, email, address, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.email = email
    this.address = address
    this.city = city
  }

  // "Setter" method to add booking.
  // I don't use an actual setter method because I don't want to overwrite the array of bookings.
  book(bookingId) {
    this.bookings.push(bookingId)
    // .push() to add new booking to array of bookings.
  }
}

// ------------------------------------------------------------------------
module.exports = User
