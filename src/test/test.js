// Testing Yard

const chalk = require('chalk')
const Guest = require('./model/guest')
const Room = require('./model/room')
const Hotel = require('./model/hotel')
const Booking = require('./model/booking')

class Test {
  constructor() {
    this.booking1 = new Booking(1, 1, 1, '2021-01-01', '2021-01-03', 2, 200, 'confirmed')
  }

  run() {
    console.log('')
    console.log('--- Tests for Booking ---')
    console.log(`booking1 should have a bookingId: ${booking1.bookingId ? chalk.green('✓') : chalk.red('✗')}`)
    console.log('')

    console.log('')
    console.log('--- Tests for Guest ---')
    console.log(`guest1 should have a firstName: ${guest1.firstName ? chalk.green('✓') : chalk.red('✗')}`)
    console.log(`guest 1 should have an email: ${guest1.email ? chalk.green('✓') : chalk.red('✗')}`)
    console.log(guest1.allBookings)
    console.log('')

    console.log('')
    console.log('--- Tests for Review ---')
    console.log(`review1 should have a guestId: ${review1.guestId ? chalk.green('✓') : chalk.red('✗')}`)
    console.log('')

    console.log('')
    console.log('--- Tests for Room ---')
    console.log(`queenRoom6 should have a roomId of 6: ${queenRoom6.roomId === 6 ? chalk.green('✓') : chalk.red('✗')}`)
    console.log(`kingRoom should have a image URL: ${kingRoom.imageURL ? chalk.green('✓') : chalk.red('✗')}`)
    console.log(`kingRoom should have a description: ${kingRoom.description ? chalk.green('✓') : chalk.red('✗')}`)
    console.log('')
  }
}
module.exports = Test
