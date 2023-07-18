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

  updateRoomDetails(newDetails) {
    const keys = ['name', 'description', 'roomType', 'maxOccupancy', 'pricePerNight', 'amenities']
    keys.forEach(key => {
      this[key] = newDetails[key] || this[key]
    })
  }
}

module.exports = Room
