class Hotel {
  constructor(name, location, description, rating, amenities, imageUrl, rooms) {
    this.name = name
    this.location = location
    this.description = description
    this.rating = rating
    this.amenities = amenities
    this.imageUrl = imageUrl
    this.rooms = rooms // # of rooms available
  }

  createRoom(room) {
    this.rooms.push(room)
  }

  // add a method to add a booking to the hotel (and updates the # of rooms available)
}

// ------------------------------------------------------------------------
module.exports = Hotel
