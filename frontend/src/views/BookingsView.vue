<!-- eslint-disable no-unused-vars -->
<script>
import TheNavBar from '../components/TheNavBar.vue'
import { useBookingStore } from '../stores/BookingStore'
import { useAccountStore } from '../stores/AccountStore'

export default {
  components: {
    TheNavBar
  },
  data() {
    const bookingStore = useBookingStore()
    return {
      allBookings: bookingStore.bookings
    }
  },
  mounted() {
    const bookingStore = useBookingStore()
    try {
      // Fetch bookings using the store action
      bookingStore.fetchBookings()
    } catch (error) {
      console.error('Error fetching bookings:', error)
    }
  }
}
</script>

<template lang="pug">
TheNavBar
div
  h1 All Bookings
  ul
    li(v-for="booking in allBookings" :key="booking._id")
      | Booking for {{ booking.guest.firstName }} {{ booking.guest.lastName }} from {{ booking.checkInDate }} to {{ booking.checkOutDate }}
</template>

<style lang=""></style>
