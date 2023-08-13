<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted } from 'vue'
import TopBar from '../components/TopBar.vue'
import { useBookingStore } from '../stores/BookingStore'

const bookingStore = useBookingStore()

onMounted(async () => {
  try {
    // Fetch bookings using the store action
    await bookingStore.fetchBookings()
  } catch (error) {
    console.error('Error fetching bookings:', error)
  }
})

const allBookings = bookingStore.bookings
</script>

<template lang="pug">
TopBar
div
  h1 All Bookings
  ul
    li(v-for="booking in allBookings" :key="booking._id")
      | Booking for {{ booking.guest.firstName }} {{ booking.guest.lastName }} from {{ booking.checkInDate }} to {{ booking.checkOutDate }}
</template>

<style lang=""></style>
