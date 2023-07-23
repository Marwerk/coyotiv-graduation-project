class Booking {
  constructor(guest, checkInDate, checkOutDate) {
    this.guest = guest
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
  }

  get totalPrice() {
    const PRICE_PER_NIGHT = 100

    // const differenceInTime = this.checkOutDate - this.checkInDate
    const differenceInMilliseconds = this.checkOutDate - this.checkInDate
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24)

    return differenceInDays * PRICE_PER_NIGHT
  }
}

// ------------------------------------------------------------------------
module.exports = Booking
