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

// How do I add the guestId to the booking without manually inputting it as a parameter?
// As in, when the user creates a booking, how is the guestId added to the booking?
const booking1 = new Booking(1, 1, 1, '2021-01-01', '2021-01-03', 2, 200, 'confirmed')
const booking2 = new Booking(2, 1, 2, '2021-01-01', '2021-01-03', 1, 100, 'confirmed')

// Tests
// console.log(`These are the entries of ${booking1}:`)
// for (const [key, value] of Object.entries(booking1)) {
//   console.log(`${key}: ${value}`)
// }

// console.log(`booking1 should have a bookingId: ${booking1.bookingId ? chalk.green('✓') : chalk.red('✗')}`)

module.exports = Booking
