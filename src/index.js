const User = require('./model/user')
const RoomGallery = require('./model/photos/room-gallery')
const Hotel = require('./model/hotel')
const Room = require('./model/room')
const Photo = require('./model/photos/photo-repository')

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
