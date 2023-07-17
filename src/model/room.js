class Room {
  constructor(roomId, name, description, roomType, maxOccupancy, pricePerNight, amenities) {
    this.roomId = roomId
    this.name = name
    this.description = description
    this.roomType = roomType
    this.maxOccupancy = maxOccupancy
    this.pricePerNight = pricePerNight
    this.amenities = amenities
  }
}

module.exports = Room

// why is prettier messing up?
