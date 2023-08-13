<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from 'vue'
import axios from 'axios'

import TopBar from '../components/TopBar.vue'

const bookingForm = ref({
  user: '64d8f9560dc47834af58e23e',
  guest: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  },
  checkIn: '',
  checkOut: '',
  type: ''
})

async function bookRoom() {
  try {
    const response = await axios.post('http://127.0.0.1:3000/bookings', bookingForm.value)
    alert('Booking successful!')
  } catch (err) {
    alert('Error booking room.')
  }
}
</script>

<template lang="pug">
TopBar
div.container
  h1.mb-4 Book a Room
  form(@submit.prevent="bookRoom")
    // First Name
    .mb-3
      label(for="firstName") First Name
      input#firstName.form-control(type="text" v-model="bookingForm.guest.firstName" required)

    // Last Name
    .mb-3
      label(for="lastName") Last Name
      input#lastName.form-control(type="text" v-model="bookingForm.guest.lastName" required)

    // Email
    .mb-3
      label(for="email") Email
      input#email.form-control(type="email" v-model="bookingForm.guest.email" required)

    // Phone Number
    .mb-3
      label(for="phoneNumber") Phone Number
      input#phoneNumber.form-control(type="tel" v-model="bookingForm.guest.phoneNumber" required)

    // Room Type
    .mb-3
      label(for="type") Room Type
      select#type.form-control(v-model="bookingForm.type" required)
        option(value="single") Single
        option(value="double") Double
        option(value="suite") Suite

    // Check-in Date
    .mb-3
      label(for="checkIn") Check-in Date
      input#checkIn.form-control(type="date" v-model="bookingForm.checkIn" required)

    // Check-out Date
    .mb-3
      label(for="checkOut") Check-out Date
      input#checkOut.form-control(type="date" v-model="bookingForm.checkOut" required)

    // Submit Button
    .mb-3
      button.btn.btn-primary(type="submit") Book Now

</template>
