const chalk = require('chalk')

class Booking {
  constructor(
    bookingCode,
    roomId,
    checkInDate,
    checkOutDate,
    numberOfGuests,
    bookingStatus
  ) {
    this.bookingCode = bookingCode
    this.roomId = roomId
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
    this.numberOfGuests = numberOfGuests
    this.bookingStatus = bookingStatus
  }
}

// create a getter method for totalPrice

// ------------------------------------------------------------------------
module.exports = Booking
