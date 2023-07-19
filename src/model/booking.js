const chalk = require('chalk')

class Booking {
  constructor(bookingId, guestId, roomId, checkInDate, checkOutDate, numberOfGuests, totalPrice, bookingStatus) {
    this.bookingId = bookingId
    this.guestId = guestId
    this.roomId = roomId
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
    this.numberOfGuests = numberOfGuests
    this.totalPrice = totalPrice
    this.bookingStatus = bookingStatus
  }
}

// https://github.com/coyotiv-sose/graduation-project-marwerk/issues/7
// How do I add the guestId to the booking without manually inputting it as a parameter?
// As in, when the user creates a booking, how is the guestId added to the booking?
const booking1 = new Booking(1, 1, 1, '2021-01-01', '2021-01-03', 2, 200, 'confirmed')
const booking2 = new Booking(2, 1, 2, '2021-01-01', '2021-01-03', 1, 100, 'confirmed')

// ------------------------------------------------------------------------
module.exports = Booking
