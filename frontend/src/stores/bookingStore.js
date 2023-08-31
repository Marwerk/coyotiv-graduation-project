import axios from 'axios'
import { defineStore } from 'pinia'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

export const useBookingStore = defineStore('Booking', {
  actions: {
    async fetchBookings() {
      return (await axios.get('/bookings')).data
    },

    async bookRoom(userId, type, checkIn, checkOut) {
      return (await axios.post('/bookings', {
        user: userId,
        type: type,
        checkIn: checkIn,
        checkOut: checkOut,})).data
    }
  }
})
