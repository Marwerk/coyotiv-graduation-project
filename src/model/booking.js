const chalk = require('chalk')

class Booking {
  constructor(guest, checkInDate, checkOutDate, numberOfGuests) {
    this.guest = guest
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
    this.numberOfGuests = numberOfGuests
    // this.bookingStatus = bookingStatus // for a future implementation
  }
}

// create a getter method for totalPrice

// ------------------------------------------------------------------------
module.exports = Booking
