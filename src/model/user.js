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

  book(hotel) {
    if (hotel.rooms > 0) {
      hotel.rooms -= 1
      const newBooking = new Booking(this)
      hotel.bookings.push(newBooking)
      return newBooking
    }
    return console.log('No rooms available')
  }
}

// ------------------------------------------------------------------------
module.exports = User
