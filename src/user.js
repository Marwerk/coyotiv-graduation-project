const Booking = require('./booking')

class User {
  constructor(firstName, lastName, phoneNumber, email, address, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.email = email
    this.address = address
    this.city = city
    this.bookings = []
  }

  book(hotel, checkIn, checkOut) {
    // Convert check-in and check-out dates to Date objects
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)

    // Check if the dates are valid before creating a booking
    if (checkInDate >= checkOutDate) {
      return console.log('Invalid booking dates')
    }

    // Check if the hotel has rooms available for the selected dates
    if (hotel.checkAvailability(checkInDate, checkOutDate)) {
      const newBooking = Booking.create({ hotel: this, checkInDate, checkOutDate })
      hotel.bookings.push(newBooking)
      hotel.decreaseAvailability()
      // this.bookings.push(newBooking)
      // TODO: the above line is returning a "Converting circular structure to JSON\n"
      // To fix: pass properties of the object, not the whole object itself
      // FIXED IN src/routes/bookings.js:29

      console.log(
        `Dear ${this.firstName}, your booking has been confirmed from ${checkIn} to ${checkOut}.
        The total price is $${newBooking.totalPrice}`
      )
      return newBooking
    }

    return console.log(
      `We're sorry ${this.firstName}, there are no rooms available for the selected dates`
    )
  }

  /* STATIC CREATE */
  static create({ firstName, lastName, phoneNumber, email, address, city, bookings }) {
    console.log('Creating a new user...', {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      city,
      bookings,
    })
    const user = new User(firstName, lastName, phoneNumber, email, address, city, bookings)

    User.list.push(user)
    return user
  }

  static list = []
}

// ------------------------------------------------------------------------
module.exports = User
