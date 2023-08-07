const Hotel = require('../src/models/hotel')

it('should add a room to the hotel', async () => {
  // Mock the Hotel instance and its save method
  const mockSave = jest.fn().mockResolvedValue(true)
  const mockHotel = {
    rooms: [],
    save: mockSave,
  }

  const room = { _id: 'room1' }

  // .call() the .addRoom method of the Hotel instance
  await Hotel.prototype.addRoom.call(mockHotel, room)

  expect(mockHotel.rooms).toContain(room)
  expect(mockSave).toHaveBeenCalled()
})
