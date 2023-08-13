<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import TopBar from '../components/TopBar.vue'

const bookings = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/bookings')
    bookings.value = response.data
  } catch (error) {
    console.error('Error fetching bookings:', error)
  }
})
</script>

<template lang="pug">
TopBar
div
  h1 All Bookings
  ul
    li(v-for="booking in bookings" :key="booking._id")
      | Booking for {{ booking.guest.firstName }} {{ booking.guest.lastName }} from {{ booking.checkInDate }} to {{ booking.checkOutDate }}
</template>

<style lang=""></style>
