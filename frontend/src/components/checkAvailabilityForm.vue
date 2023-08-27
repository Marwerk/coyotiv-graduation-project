<script>
import { useBookingStore } from '../stores/bookingStore.js'

export default {
  name: 'checkAvailabilityForm',
  data() {
    return {
      form: {
        checkIn: '',
        checkOut: '',
        rooms: '',
        guests: ''
      },
      isAvailable: null // Data property to store availability status
    }
  },
  methods: {
    async checkAvailability() {
      const store = useBookingStore()
      try {
        await store.checkAvailability(this.form)

        // Check if rooms are available
        if (store.availableRooms.length > 0) {
          this.isAvailable = true
        } else {
          this.isAvailable = false
        }
      } catch (error) {
        console.error('Error checking availability:', error)
        this.isAvailable = false
      }
    }
  }
}
</script>

<template lang="pug">
.center-content
  .text-cta
    h1 Book your stay!
    p Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laborum consequatur est perferendis sapiente minus mollitia quis, esse adipisci exercitationem voluptatum! Quisquam, voluptas. Quisquam, voluptas.
  .form-container
    .booking-form
      form
        .row
          .col-half
            .form-group
              label.form-label Check In
                input.form-control(type='date' required='')
          .col-half
            .form-group
              label.form-label Check Out
                input.form-control(type='date' required='')
        .row
          .col-third
            .form-group
              label.form-label(for="rooms") Rooms
                select#rooms.form-control(name="rooms" type='number' required='' autocomplete="1")
                  option 1
                  option 2
                  option 3
          .col-third
            .form-group
              label.form-label(for="guests") Guests
                select#guests.form-control(name="guests" type='number' required='' autocomplete="1")
                  option 1
                  option 2
                  option 3
        .form-btn.btn-center
          button.submit-btn(@click="checkAvailability") Check Availability
          div(v-if="isAvailable !== null")
            span(v-if="isAvailable") Rooms are available!
            span(v-else) Sorry, no rooms are available.
</template>

<style scoped>
.text-cta {
  flex: 1;
  margin-right: 50px;
}

.text-cta h1 {
  font-size: 52px;
  color: #fcf6f5;
  font-weight: 700;
  text-transform: uppercase;
}

.text-cta p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
}

.form-label {
  display: block;
  color: #3e485c;
  font-weight: 700;
  margin-bottom: 6px;
}

@media screen and (max-width: 800px) {
  .text-cta {
    margin-right: 0;
    margin-bottom: 30px;
  }

  .text-cta h1 {
    font-size: 36px;
  }

  .booking-form {
    padding: 20px 10px;
  }
}
</style>
