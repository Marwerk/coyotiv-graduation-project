class User {
  constructor(userId, firstName, lastName, phoneNumber, email, password, address, city, paymentMethod, creationDate) {
    this.userID = userId
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.email = email
    this.password = password
    this.address = address
    this.city = city
    this.paymentMethod = paymentMethod
    this.creationDate = creationDate
    this.bookings = []
  }

  // "Setter" method to add booking.
  // I don't use an actual setter method because I don't want to overwrite the array of bookings.

  addBooking(booking) {
    this.booking.push(booking)
  }

  // Getter method to get all bookings.
  get allBookings() {
    return this.bookings
  }

  // Method to update user details.
  updateUserDetails(newDetails) {
    this.firstName = newDetails.firstName || this.firstName
    this.lastName = newDetails.lastName || this.lastName
    this.phoneNumber = newDetails.phoneNumber || this.phoneNumber
    this.email = newDetails.email || this.email
    this.password = newDetails.password || this.password
    this.address = newDetails.address || this.address
    this.city = newDetails.city || this.city
    this.paymentMethod = newDetails.paymentMethod || this.paymentMethod
  }
}

module.exports = User
