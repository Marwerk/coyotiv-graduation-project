class Hotel {
  constructor(name, location, rooms) {
    this.name = name
    this.location = location
    this.rooms = rooms
    this.bookings = []
  }

  cancelBooking(email) {
    const bookingToCancel = booking => booking.guest.email === email
    const indexOfBookingToCancel = this.bookings.findIndex(bookingToCancel)

    const bookingWasFound = indexOfBookingToCancel !== -1

    if (bookingWasFound) {
      this.bookings.splice(indexOfBookingToCancel, 1)
      this.rooms += 1
    }

    console.log(`Booking for ${email} was ${bookingWasFound ? '' : 'not '}found`)
  }
}

// ------------------------------------------------------------------------
module.exports = Hotel
