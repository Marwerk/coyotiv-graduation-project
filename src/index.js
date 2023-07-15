const User = require('./models/hotel')
const RoomGallery = require('./models/room-gallery')
const Hotel = require('./models/hotel')
const Room = require('./models/room')

const User = require('./models/user')
const Photo = require('./models/photo')


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
