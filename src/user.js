const Booking = require('./booking')

class User {
  constructor(firstName, lastName, phoneNumber, email, address, city, bookings) {
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

  static create({ firstName }) {
    console.log('Creating a new user...', { firstName })
    const newUser = new User(firstName)

    User.list.push(newUser)
    return newUser
  }

  static list = []
}

// ------------------------------------------------------------------------
module.exports = User
