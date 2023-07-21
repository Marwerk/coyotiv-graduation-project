class Hotel {
  constructor(name, location, rooms) {
    this.name = name
    this.location = location
    this.rooms = rooms
    this.bookings = []
  }

  createRoom(room) {
    this.rooms.push(room)
  }

  // add a method to add a booking to the hotel (and updates the # of rooms available)
}

// ------------------------------------------------------------------------
module.exports = Hotel
