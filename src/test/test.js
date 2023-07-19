// --- Testing Yard --- //

const chalk = require('chalk')
const Guest = require('../model/guest')
const Room = require('../model/room')
// const Hotel = require('../model/hotel')
const Booking = require('../model/booking')
const Review = require('../model/review')

class Test {
  constructor() {
    this.booking1 = new Booking(1, 1, 1, '2021-01-01', '2021-01-03', 2, 200, 'confirmed')
    this.guest1 = new Guest(
      1,
      'Marvin',
      'Werkmeister',
      '017672274578',
      'marvin.blerg@gmail.com',
      'password123',
      'Timbuktustraße 3',
      'Berlin',
      'PayPal',
      '2023-07-19',
      [this.booking1]
    )
    this.review1 = new Review(1, 1, 5, 'This hotel is amazing!', '2021-01-01')
    this.singleRoom6 = new Room(6, 'Single Room', 'One Queen Size Bed', 1, 100, [
      'Private External Bathroom', // perhaps "adjacent" is a better word than "external?
      'Wifi',
      'TV',
      'Air Conditioning',
      'Garden View',
      'Breakfast Included',
    ])
  }

  run() {
    console.log('')
    console.log('--- Tests for Booking ---')
    console.log(`booking1 should have a bookingId: ${this.booking1.bookingId ? chalk.green('✓') : chalk.red('✗')}`)
    console.log('')

    console.log('')
    console.log('--- Tests for Guest ---')
    console.log(`guest1 should have a firstName: ${this.guest1.firstName ? chalk.green('✓') : chalk.red('✗')}`)
    console.log(`guest 1 should have an email: ${this.guest1.email ? chalk.green('✓') : chalk.red('✗')}`)

    // https://github.com/coyotiv-sose/graduation-project-marwerk/issues/9
    // returns completely empty, not even the empty array
    console.log(`These are the bookings of guest1: ${this.guest1.allBookings}`)
    console.log(this.guest1.allBookings)
    console.log('')

    console.log('')
    console.log('--- Tests for Review ---')
    console.log(`review1 should have a guestId: ${this.review1.guestId ? chalk.green('✓') : chalk.red('✗')}`)
    console.log('')

    console.log('')
    console.log('--- Tests for Room ---')
    console.log(
      `singleRoom6 should have a roomId of 6: ${this.singleRoom6.roomId === 6 ? chalk.green('✓') : chalk.red('✗')}`
    )
    console.log(`singleRoom6 should have a image URL: ${this.singleRoom6.imageURL ? chalk.green('✓') : chalk.red('✗')}`)
    console.log(
      `singleRoom6 should have a description: ${this.singleRoom6.description ? chalk.green('✓') : chalk.red('✗')}`
    )
    console.log('')
  }
}

const firstTest = new Test()
firstTest.run()

// ------------------------------------------------------------------------
module.exports = Test
