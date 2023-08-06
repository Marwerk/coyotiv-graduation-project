const mongoose = require('mongoose')

jest.mock('mongoose', () => ({
  Schema: jest.fn(),
  model: jest.fn(),
  SchemaTypes: {
    ObjectId: jest.fn(),
  },
}))

const Hotel = require('../src/models/hotel')

describe('Hotel', () => {
  describe('addRoom', () => {
    it('should add a room to the hotel', async () => {
      const mockSave = jest.fn()
      const mockHotel = {
        rooms: [],
        save: mockSave,
      }

      const room = { _id: 'room1' }
      await Hotel.prototype.addRoom.call(mockHotel, room)

      expect(mockHotel.rooms).toContain(room)
      expect(mockSave).toHaveBeenCalled()
    })
  })
})
