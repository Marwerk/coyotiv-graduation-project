import axios from 'axios'
import { defineStore } from 'pinia'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

export const useBookingStore = defineStore('booking', {
  actions: {
    async fetchBookings() {
      return (await axios.get('/bookings')).data
    },
    async bookRoom(roomId, checkIn, checkOut) {
      return (await axios.post('/bookings', {
        room: roomId,
        checkIn: checkIn,
        checkOut: checkOut
      })).data
    }
  }
})
