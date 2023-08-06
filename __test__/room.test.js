const Room = require('../src/models/room')

// Reset all mocks before each
beforeEach(() => {
  jest.resetAllMocks()
})

// Test Case 1: Checking availability when room is available

describe('Room', () => {
  describe('checkAvailability', () => {
    it('should return true if room savailable', async () => {
      const room = new Room()
      room.units = 2
      room.bookings = [
        {
          checkInDate: new Date('2023-08-10'),
          checkOutDate: new Date('2023-08-15'),
        },
      ]

      const result = await room.checkAvailability(new Date('2023-08-05'), new Date('2023-08-09'))
      expect(result).toBe(true)
    })
  })
})

// // it = individual test
// it('converts checkIn date string to Date objects', () => {
//   const date = checkIn
//   const dateObject = new Date(date)

//   expect(dateObject).toEqual(new Date(date))
// })

// it('converts checkOut date string to Date objects', () => {
//   const date = checkOut
//   const dateObject = new Date(date)

//   expect(dateObject).toEqual(new Date(date))
// })
