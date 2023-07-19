class Guest {
  constructor(guestId, firstName, lastName, phoneNumber, email, password, address, city, paymentMethod, creationDate) {
    this.guestId = guestId
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
  addBooking(bookingId) {
    this.bookings.push(bookingId)
    // .push() to add new booking to array of bookings.
  }

  // Getter method to get all bookings.
  get allBookings() {
    return this.bookings
  }

  // Method to update guest details. Based on Taiga's solution.
  updateGuestDetails(newDetails) {
    const keys = ['firstName', 'lastName', 'phoneNumber', 'email', 'password', 'address', 'city', 'paymentMethod']
    keys.forEach(key => {
      this[key] = newDetails[key] || this[key]
      // forEach loop to iterate over each key.
      // For each key, we update the value if newDetails has a new value for that key; otherwise, we keep the current value.
    })
  }
  // First attempt at updateUserDetails method.
  // This method works, but it's not very DRY. (Did I just apply premature optimization?!)
  //
  // updateUserDetails(newDetails) {
  //   this.firstName = newDetails.firstName || this.firstName
  //   this.lastName = newDetails.lastName || this.lastName
  //   this.phoneNumber = newDetails.phoneNumber || this.phoneNumber
  //   this.email = newDetails.email || this.email
  //   this.password = newDetails.password || this.password
  //   this.address = newDetails.address || this.address
  //   this.city = newDetails.city || this.city
  //   this.paymentMethod = newDetails.paymentMethod || this.paymentMethod
  // }
}

module.exports = Guest
