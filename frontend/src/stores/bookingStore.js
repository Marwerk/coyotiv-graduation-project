import { defineStore } from 'pinia'
import axios from 'axios'

export const useBookingStore = defineStore('bookings', {
  state: () => ({
    bookings: [],
    availableRooms: [],
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
    },
    error: null
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
        const { data } = await axios.get('/bookings')
        this.bookings = data
      } catch (error) {
        this.error = error
      }
    },

    async addBooking() {
      try {
        const { data } = await axios.post('/bookings', this.currentBooking)
        this.bookings.push(data)
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
      } catch (error) {
        this.error = error
      }
    },

    async checkAvailability(payload) {
      try {
        const { data } = await axios.post('/bookings/availability', payload) // Make sure to use the correct endpoint here
        this.availableRooms = data || []
      } catch (error) {
        this.error = error
      }
    },

    async deleteBooking(id) {
      try {
        await axios.delete(`/bookings/${id}`)
        this.bookings = this.bookings.filter((booking) => booking._id !== id)
      } catch (error) {
        this.error = error
      }
    }
  }
})
