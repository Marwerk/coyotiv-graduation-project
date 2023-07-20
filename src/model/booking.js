const chalk = require('chalk')

class Booking {
  constructor(bookingCode, guestId, roomId, checkInDate, checkOutDate, numberOfGuests, totalPrice, bookingStatus) {
    this.bookingCode = bookingCode
    this.guestId = guestId
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
