const request = require('supertest')
const Hotel = require('../src/models/hotel')
const app = require('../src/app')

it('should create a hotel', async () => {
  // Mock the Hotel instance and its save method
  const result = await request(app).post('/hotels').send({
    hotelName: 'hotel 1',
    location: 'Asuncion, PY',
    rooms: [],
  })
  console.log(result.body)
  expect(result.body).toMatchObject({
    location: 'Asuncion, PY',
    rooms: [],
    bookings: [],
  })
})

// expect(mockHotel.rooms).toContain(room)
// const mockHotel = {
//   rooms: [],
//   save: mockSave,
// }

// const room = { _id: 'room1' }

// .call() the .addRoom method of the Hotel instance
//   await Hotel.prototype.addRoom.call(mockHotel, room)

// expect(mockHotel.rooms).toContain(room)
// expect(mockSave).toHaveBeenCalled()
