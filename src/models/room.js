class Room {
  constructor(idRoom, name, description, roomType, maxOccupancy, pricePerNight, amenities, imageUrl) {
    this.idRoom = idRoom
    this.name = name
    this.description = description
    this.roomType = roomType
    this.maxOccupancy = maxOccupancy
    this.pricePerNight = pricePerNight
    this.amenities = amenities
    this.imageUrl = imageUrl
  }
}

module.exports = Room

// why is prettier messing up?
