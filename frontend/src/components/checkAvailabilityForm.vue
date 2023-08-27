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
              label.form-label Rooms
              select.form-control
                option 1
                option 2
                option 3
              .select-arrow
          .col-third
            .form-group
              label.form-label Guests
              select.form-control
                option 1
                option 2
                option 3
              .select-arrow
        .form-btn.btn-center
          button.submit-btn(@click="checkAvailability") Check Availability
          div(v-if="isAvailable !== null")
            span(v-if="isAvailable") Rooms are available!
            span(v-else) Sorry, no rooms are available.
</template>

<style scoped>
/* .form-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
} */

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

/* .booking-form {
  background-color: #fcf6f5;
  padding: 20px;
  box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
} */

.form-label {
  display: block;
  color: #3e485c;
  font-weight: 700;
  margin-bottom: 6px;
}

.select-arrow {
  position: absolute;
  right: 0px;
  bottom: 4px;
  width: 32px;
  line-height: 32px;
  height: 32px;
  text-align: center;
  pointer-events: none;
  color: rgba(62, 72, 92, 0.3);
}

.select-arrow:after {
  content: '\279C';
  display: block;
  transform: rotate(90deg);
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
