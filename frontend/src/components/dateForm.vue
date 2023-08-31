<script>
import { mapActions } from 'pinia'
import { useBookingStore } from '../stores/bookingStore'
import { useAccountStore } from '../stores/accountStore'

export default {
  components: {},

  data() {
    return {
      bookingForm: {
        type: '',
        checkIn: '',
        checkOut: '',
        guests: ''
      }
    }
  },

  computed: {
    userId() {
      const accountStore = useAccountStore()
      return accountStore.user?._id
    }
  },
  methods: {
    ...mapActions(useBookingStore, ['bookRoom']),

    async handleBookRoom() {
      if (!this.userId) {
        alert('Please log in to book a room')
        return
      }
      try {
        await this.bookRoom(
          this.userId,
          this.bookingForm.type,
          this.bookingForm.checkIn,
          this.bookingForm.checkOut
        )
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
.form-container
  form.booking-form(@submit.prevent='handleBookRoom')
    .form-group
      label(for='checkIn') Check-in Date
      input#checkIn(type='date' v-model='bookingForm.checkIn' required='')
    .form-group
      label(for='checkOut') Check-out Date
      input#checkOut(type='date' v-model='bookingForm.checkOut' required='')
    .form-group
      label(for='guests') Guests
      select#guests(v-model='bookingForm.guests' required='')
        option(value='1') 1
        option(value='2') 2
    .form-group
      label(for='type') Room Type
      select#type(v-model='bookingForm.type' required='')
        option(value='single') Single
        option(value='double') Double
        option(value='suite') Suite
    .form-group
      button.submit-btn(type='submit') Book Now
</template>

<style scoped>
.form-container {
  display: inline-block; /* This makes the container's width based on its content */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fcf6f5;
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #e0e0e0;
}

.booking-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Ensuring the form takes the full width of the container */
}

.form-group {
  flex: 1;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  white-space: nowrap; /* Ensuring text doesn't wrap */
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px 10px;
}

.submit-btn {
  white-space: nowrap; /* Ensuring text doesn't wrap */
  min-width: 80px; /* Ensuring the button doesn't shrink past the setting*/
}
</style>
