const Users = require('./models/users')
const Photo = require('./models/photos')

const marvin = new Users(
  'Marvin',
  'Werkmesiter',
  +4917672274579,
  'marvin.werkmeister@outlook.com',
  'Kolonnenstr. 20, 10829',
  'Berlin',
  '10829'
)

console.log('are we online?')
