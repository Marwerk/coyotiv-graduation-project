const Booking = require('./booking')

class User {
  constructor(firstName, lastName, phoneNumber, email, address, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.email = email
    this.address = address
    this.city = city
    // this.bookings = []
  }

  book(hotel, checkIn, checkOut) {
    // Convert check-in and check-out dates to Date objects
    const checkInDate = new Date(`${checkIn}T00:00:00Z`)
    const checkOutDate = new Date(`${checkOut}T00:00:00Z`)

    if (hotel.checkAvailability(checkInDate, checkOutDate)) {
      const newBooking = new Booking(this, checkInDate, checkOutDate)
      hotel.bookings.push(newBooking)
      // this.bookings.push(newBooking)

      console.log(
        `Dear ${this.firstName}, your booking has been confirmed for ${hotel.name} from ${checkIn} to ${checkOut}.
        The total price is $${newBooking.totalPrice}`
      )
      return newBooking
    }

    return console.log(`We're sorry ${this.firstName}, No rooms available for the selected dates`)
  }
}

// ------------------------------------------------------------------------
module.exports = User
