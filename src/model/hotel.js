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

  checkAvailability(checkIn, checkOut) {
    // First check if there are rooms available, return false if not
    if (this.rooms <= 0) {
      return false
    }

    // Loop over each existing booking to check for date overlap
    for (let i = 0; i < this.bookings.length; i++) {
      const booking = this.bookings[i]

      // Check if requersted check-in date OR requested check-out date is within an existing booking's dates
      if (
        (checkIn >= booking.checkIn && checkIn <= booking.checkOut) ||
        (checkOut >= booking.checkIn && checkOut <= booking.checkOut)
      ) {
        return false
      }
    }

    // If there are rooms available and no overlap in dates, decrease the number of rooms
    this.rooms -= 1
    return true
  }
}

// ------------------------------------------------------------------------
module.exports = Hotel
