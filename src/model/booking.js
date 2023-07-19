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

module.exports = Booking
