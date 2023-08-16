import { defineStore } from 'pinia'
import axios from 'axios'

export const useBookingStore = defineStore('bookings', {
  state: () => ({
    bookings: [],
    currentBooking: {
      guest: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      checkIn: '',
      checkOut: '',
      room: ''
    }
  }),

  getters: {
    totalBookings() {
      return this.bookings.length
    }
  },

  actions: {
    setBookingData(data) {
      this.currentBooking = data
    },

    async fetchBookings() {
      try {
        const response = await axios.get('http://127.0.0.1:3000/bookings')
        this.bookings = response.data
      } catch (error) {
        console.error('Error fetching bookings:', error)
      }
    },

    async addBooking() {
      console.log('Trying to add a new booking with data:', this.currentBooking)

      try {
        const response = await axios.post('http://127.0.0.1:3000/bookings', this.currentBooking)
        console.log('Booking response from server:', response.data)
        this.bookings.push(response.data)
        this.currentBooking = {
          guest: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
          },
          checkIn: '',
          checkOut: '',
          room: ''
        }
        alert('Booking successful!')
      } catch (error) {
        console.error('Error booking room:', error)
        alert('Error booking room.')
      }
    },

    removeBookingById(id) {
      this.bookings = this.bookings.filter((booking) => booking._id !== id)
    }
  }
})
