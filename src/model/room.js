const chalk = require('chalk')
const Hotel = require('./hotel')

const lasCalas = new Hotel('Las Calas Apart-Hotel', 'Francisco Zurbaran 1560, Asuncion, Paraguay')

class Room {
  constructor(roomId, name, description, maxOccupancy, pricePerNight, amenities) {
    this.roomId = roomId
    this.name = name
    this.description = description
    // this.roomType = roomType
    this.maxOccupancy = maxOccupancy
    this.pricePerNight = pricePerNight
    this.amenities = amenities
  }

  // newDetails is an object with the new values for the room
  updateRoomDetails(newDetails) {
    const keys = ['name', 'description', 'maxOccupancy', 'pricePerNight', 'amenities']
    keys.forEach(key => {
      this[key] = newDetails[key] || this[key]
    })
    // example of what this method does:
    // myRoom.updateRoomDetails({ name: 'Updated Room Name', maxOccupancy: 3 })
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

lasCalas.addRoom(doubleRoom)
console.log(lasCalas.rooms)
// There is a total of 3 queenRoom in the Hotel, one has an external bathroom (roomId = 6)
const queenRoom = new Room(2, 'Single Room', 'One Queen Size Bed', 1, 100, [
  'Private Bathroom',
  'Wifi',
  'TV',
  'Air Conditioning',
  'Garden View',
  'Breakfast Included',
])

lasCalas.addRoom(queenRoom)

const queenRoom6 = new Room(6, 'Single Room', 'One Queen Size Bed', 1, 100, [
  'Private External Bathroom', // perhaps "adjacent" is a better word than "external?
  'Wifi',
  'TV',
  'Air Conditioning',
  'Garden View',
  'Breakfast Included',
])

lasCalas.addRoom(queenRoom6)

// There is a total of 3 kingRoom in the Hotel
const kingRoom = new Room(3, 'Suite Room', 'One King Size Bed', 2, 200, [
  'Private Bathroom',
  'Wifi',
  'TV',
  'Air Conditioning',
  'Garden View',
  'Breakfast Included',
])

lasCalas.addRoom(kingRoom)

// Tests
// console.log(lasCalas.rooms)
// console.log(`queenRoom6 should have a roomId of 6: ${queenRoom6.roomId === 6 ? chalk.green('✓') : chalk.red('✗')}`)

module.exports = Room
