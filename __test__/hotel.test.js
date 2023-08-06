const Hotel = require('../src/models/hotel')

it('should add a room to the hotel', async () => {
  // Mock the Hotel instance and its save method
  const mockSave = jest.fn().mockResolvedValue(true) // Mock it to resolve true for simplicity
  const mockHotel = {
    rooms: [],
    save: mockSave,
  }

  const room = { _id: 'room1' }

  // Call the addRoom prototype method directly using .call()
  await Hotel.prototype.addRoom.call(mockHotel, room)

  expect(mockHotel.rooms).toContain(room)
  expect(mockSave).toHaveBeenCalled()
})
