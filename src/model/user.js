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

  book(hotel, checkIn, checkOut) {
    if (hotel.checkAvailability(checkIn, checkOut)) {
      const newBooking = new Booking(this, checkIn, checkOut)
      hotel.bookings.push(newBooking)
      return newBooking
    }
    return console.log('No rooms available for the selected dates')
  }
}

// ------------------------------------------------------------------------
module.exports = User
