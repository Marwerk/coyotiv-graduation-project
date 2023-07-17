class Booking {
  constructor(bookingId, userId, roomId, checkInDate, checkOutDate, numberOfGuests, totalPrice, bookingStatus) {
    this.bookingId = bookingId
    this.userId = userId
    this.roomId = roomId
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
    this.numberOfGuests = numberOfGuests
    this.totalPrice = totalPrice
    this.bookingStatus = bookingStatus
  }
}

module.exports = Booking
