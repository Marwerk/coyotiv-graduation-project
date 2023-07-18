// Assuming you've exported your classes from their respective files, you first need to import them
const User = require('./model/user')
const Room = require('./model/room')
const Hotel = require('./model/hotel')
const Booking = require('./model/booking')

// Now let's create some instances

const user1 = new User(
  1,
  'Marvin',
  'Werkmeister',
  '1234567890',
  'marwerk@gmail.com', // not my real email (:
  'password123',
  '123 Street',
  'Berlin',
  'Credit Card',
  new Date()
)

let room1 = new Room(1, 'Room A', 'Deluxe Room with Sea View', 'Deluxe', 2, 100, ['Sea View', 'Wifi', 'TV'])

let hotel1 = new Hotel(
  'Hotel Paradise',
  'Beach Street',
  'Best Hotel in Town',
  4.5,
  ['Pool', 'Gym', 'Free Breakfast'],
  'imageUrl'
)

let booking1 = new Booking(1, user1.userID, room1.roomId, new Date(), new Date(), 2, 200, 'Confirmed')

// Simple tests to check if the objects have been created correctly

console.log(user1 instanceof User) // Should return true
console.log(room1 instanceof Room) // Should return true
console.log(hotel1 instanceof Hotel) // Should return true
console.log(booking1 instanceof Booking) // Should return true

// Log the objects to check if the data is correct
console.log(user1)
console.log(room1)
console.log(hotel1)
console.log(booking1)
