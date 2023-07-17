class Room {
  constructor(
    idRoom,
    name,
    description,
    roomType,
    maxOccupancy,
    pricePerNight,
    amenities,
    imageUrl,
    totalPrice,
    checkInDate,
    checkOutDate,
    bookingDate,
    bookingId,
    userId,
    roomId
  ) {
    this.bookingId = bookingId
    this.userId = userId
    this.roomId = roomId
    this.name = name
    this.description = description
    this.roomType = roomType
    this.maxOccupancy = maxOccupancy
    this.pricePerNight = pricePerNight
    this.amenities = amenities
    this.PhotoId = imageUrl
    this.totalPrice = totalPrice
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
    this.bookingDate = bookingDate
  }
}

module.exports = Room

// why is prettier messing up?
