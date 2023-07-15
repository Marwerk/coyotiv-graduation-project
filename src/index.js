const User = require('./models/user')
const RoomGallery = require('./models/photos/room-gallery')
const Hotel = require('./models/hotel')
const Room = require('./models/room')
const Photo = require('./models/photos/photo-repository')

const marvin = new User(
  'Marvin',
  'Werkmesiter',
  +4917672274579,
  'marvin.werkmeister@outlook.com',
  'Kolonnenstr. 20, 10829',
  'Berlin',
  '10829'
)

console.log('are we online?')
