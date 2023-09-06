import axios from 'axios'
import { defineStore } from 'pinia'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

export const useBookingStore = defineStore('Booking', {
  state: () => ({
    allBookings: []
  }),
  actions: {
    async fetchBookings() {
      this.allBookings = (await axios.get('/bookings')).data
    },

    async bookRoom(userId, type, checkIn, checkOut) {
      return (await axios.post('/bookings', {
        user: userId,
        type: type,
        checkIn: checkIn,
        checkOut: checkOut,})).data
    },

    async updateBooking(bookingId, checkIn, checkOut) {
      return (await axios.put(`/bookings/${bookingId}`, {
        checkIn: checkIn,
        checkOut: checkOut,
      })).data
    },

    async deleteBookingById(bookingId) {
      try {
        const response = await axios.delete(`/bookings/${bookingId}`);
        return response.data;
      } catch (error) {
        console.error("Error deleting the booking:", error);
        throw error;
      }
    }

  }
})
