<!-- eslint-disable no-unused-vars -->
<script>
import { mapActions } from 'pinia'
import { useBookingStore } from '../stores/oldBookingStore'

export default {
  components: {},

  data() {
    return {
      bookingForm: {
        guest: {
          firstName: '',
          lastName: '',
          phoneNumber: ''
        },
        checkIn: '',
        checkOut: '',
        type: ''
      }
    }
  },

  computed: {
    // bookingStore() {
    //   return useBookingStore()
    // }
  },

  methods: {
    ...mapActions(useBookingStore, ['addBooking', 'setBookingData']),

    async bookRoom() {
      try {
        this.setBookingData(this.bookingForm)
        await this.addBooking()
        alert('Booking successful!')
      } catch (err) {
        alert(`Error booking room ${err.message}`)
        console.log(err)
      }
    }
  }
}
</script>

<template lang="pug">

div.form-container
  h1.mb-4 Book a Room
  form(@submit.prevent="bookRoom")
    // First Name
    .mb-3
      label(for="firstName") First Name
      input#firstName.form-control(type="text" v-model="bookingForm.guest.firstName")

    // Last Name
    .mb-3
      label(for="lastName") Last Name
      input#lastName.form-control(type="text" v-model="bookingForm.guest.lastName")

    // Email
    .mb-3
      label(for="email") Email
      input#email.form-control(type="email" v-model="bookingForm.guest.email")

    // Phone Number
    .mb-3
      label(for="phoneNumber") Phone Number
      input#phoneNumber.form-control(type="tel" v-model="bookingForm.guest.phoneNumber")

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
