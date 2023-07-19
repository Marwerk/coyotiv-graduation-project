class Hotel {
  constructor(name, location, description, rating, amenities, imageUrl, rooms) {
    this.name = name
    this.location = location
    this.description = description
    this.rating = rating
    this.amenities = amenities
    this.imageUrl = imageUrl
    this.rooms = []
  }

  addRoom(room) {
    this.rooms.push(room)
  }
}

module.exports = Hotel
