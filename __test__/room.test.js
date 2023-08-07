const Room = require('../src/models/room')

// Test Case 1: Checking availability when room is available
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
