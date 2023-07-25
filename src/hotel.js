class Hotel {
  constructor(name, location, rooms) {
    this.name = name
    this.location = location
    this.rooms = rooms
    this.bookings = []
  }

  // Method to cancel booking
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

  // Check if rooms are available on given range
  checkAvailability(checkIn, checkOut) {
    // Check if there are rooms available, return false if not
    if (this.rooms <= 0) {
      return false
    }

    // Loop over each existing booking to check for date overlap
    for (let i = 0; i < this.bookings.length; i += 1) {
      const booking = this.bookings[i]

      // check if the requested dates overlap with an existing booking
      if (checkIn < booking.checkOutDate && checkOut > booking.checkInDate) {
        return false
      }
    }

    // If there are rooms available and no overlap in dates, decrease the number of rooms
    this.rooms -= 1
    return true
  }

  static create({ hotel }) {
    console.log('Creating a new hotel...', { Hotel })
    const newHotel = new Hotel(Hotel)

    return newHotel
  }
}

// ------------------------------------------------------------------------
module.exports = Hotel
