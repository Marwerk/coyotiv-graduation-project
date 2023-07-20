const chalk = require('chalk')

class Booking {
  constructor(bookingCode, roomId, guestDetails, checkInDate, checkOutDate, numberOfGuests) {
    this.bookingCode = bookingCode
    this.roomId = roomId
    this.guestDetails = { guestDetails }
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
    this.numberOfGuests = numberOfGuests
    // this.bookingStatus = bookingStatus // for a future implementation
  }
}

// create a getter method for totalPrice

// ------------------------------------------------------------------------
module.exports = Booking
