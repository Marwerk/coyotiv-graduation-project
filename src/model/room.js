class Room {
  constructor(roomId, name, description, roomType, maxOccupancy, pricePerNight, amenities) {
    this.roomId = roomId
    this.name = name
    this.description = description
    // this.roomType = roomType
    this.maxOccupancy = maxOccupancy
    this.pricePerNight = pricePerNight
    this.amenities = amenities
  }

  updateRoomDetails(newDetails) {
    const keys = ['name', 'description', 'maxOccupancy', 'pricePerNight', 'amenities']
    keys.forEach(key => {
      this[key] = newDetails[key] || this[key]
    })
  }
}

// Should I create an instance of each room? If so, I would make the roomId = the room number on the door)

// There is a total of 3 doubleRoom in the Hotel
const doubleRoom = new Room(1, 'Double Room', 'Two Single Size Beds', 2, 100, [
  'Private Bathroom',
  'Wifi',
  'TV',
  'Air Conditioning',
  'Garden View',
  'Breakfast Included',
])

// There is a total of 3 queenRoom in the Hotel, one has an external bathroom (roomId = 6)
const queenRoom = new Room(2, 'Single Room', 'One Queen Size Bed', 1, 100, [
  'Private Bathroom',
  'Wifi',
  'TV',
  'Air Conditioning',
  'Garden View',
  'Breakfast Included',
])

const queenRoom6 = new Room(6, 'Single Room', 'One Queen Size Bed', 1, 100, [
  'Private External Bathroom',
  'Wifi',
  'TV',
  'Air Conditioning',
  'Garden View',
  'Breakfast Included',
])

// There is a total of 3 kingRoom in the Hotel
const kingRoom = new Room(3, 'Suite Room', 'One King Size Bed', 2, 200, [
  'Private Bathroom',
  'Wifi',
  'TV',
  'Air Conditioning',
  'Garden View',
  'Breakfast Included',
])

// why is slack not working?
module.exports = Room
