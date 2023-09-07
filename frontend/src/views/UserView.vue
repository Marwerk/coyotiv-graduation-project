<script>
import { mapState, mapActions } from 'pinia'
import { useAccountStore } from '@/stores/accountStore'
import { useBookingStore } from '@/stores/bookingStore'

export default {
  name: 'UserView',
  computed: {
    ...mapState(useAccountStore, ['user']),
    ...mapState(useBookingStore, ['allBookings']) // retrieve all bookings from store
  },
  async created() {
    await this.fetchBookings()
  },
  async mounted() {
    // Assuming we may want to fetch fresh user data when this view mounts
    await this.fetchUser()
  },
  methods: {
    ...mapActions(useAccountStore, ['fetchUser']),
    ...mapActions(useBookingStore, ['fetchBookings', 'updateBooking', 'deleteBookingById']),

    async handleUpdateBooking(bookingId) {
      const newCheckIn = prompt('Enter new check-in date:', 'yyyy-mm-dd')
      const newCheckOut = prompt('Enter new check-out date:', 'yyyy-mm-dd')

      if (newCheckIn && newCheckOut) {
        try {
          await this.updateBooking(bookingId, newCheckIn, newCheckOut)
          alert('Booking updated successfully')

          // Refresh the user data after successfully updating the booking
          await this.fetchUser()
        } catch (error) {
          alert('Error updating booking')
          console.error(error)
        }
      }
    },

    async handleDeleteBooking(bookingId) {
      const confirmDelete = confirm('Are you sure you want to delete this booking?')

      if (confirmDelete) {
        try {
          await this.deleteBookingById(bookingId)
          alert('Booking deleted successfully')

          // Remove the deleted booking from user's bookings list
          this.user.bookings = this.user.bookings.filter((booking) => booking._id !== bookingId)
        } catch (error) {
          alert(`Error deleting booking: ${error.message}`)
          console.error(error)
        }
      }
    },
    // Format date for readability
    formatDate(dateString) {
      const date = new Date(dateString)
      const day = date.getDate()
      const month = date.toLocaleString('default', { month: 'long' }) // This gives the full month name
      const year = date.getFullYear()
      return `${day} of ${month} ${year}`
    }
  }
}
</script>

<template lang="pug">
div
  div(v-if='user')

    // User Profile section
    div.form-container
      h3 User Profile
      p
        strong Name:
        |  {{ user.name || 'Unknown User'}}
      p
        strong Email:
        |  {{ user.email }}

  div(v-if="user.role === 'admin'")
    div.form-container.booking-entries-container
      h3 Bookings
      div(v-for='booking in allBookings' :key='booking._id' class="booking-entry")
        p
          strong User:
          |  {{ booking.guest.email }}
          br
          strong Check-in:
          |  {{ formatDate(booking.checkInDate) }}
          br
          strong Check-out:
          |  {{ formatDate(booking.checkOutDate) }}
          br
          strong Room:
          |  '{{ booking.room.type }}' type, door # {{ booking.room.doorNumber }}
          br
          strong Total Price:
          |  ${{ booking.totalPrice }}
        button(@click='handleUpdateBooking(booking._id)') Update
        button(@click='handleDeleteBooking(booking._id)') Delete
  div(v-else)
    div.form-container.booking-entries-container
      h3 Bookings
      div(v-for='booking in user.bookings' :key='booking._id' class="booking-entry")
        p
          strong Check-in:
          |  {{ formatDate(booking.checkInDate) }}
          br
          strong Check-out:
          |  {{ formatDate(booking.checkOutDate) }}
          br
          strong Room:
          |  '{{ booking.room.type }}' type, door # {{ booking.room.doorNumber }}
          br
          strong Total Price:
          |  ${{ booking.totalPrice }}
        button(@click='handleDeleteBooking(booking._id)') Delete
</template>

<style scoped>
div {
  color: rgb(0, 0, 0);
}

.booking-entry {
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  padding: 10px;
  margin-bottom: 20px;
  max-width: 400px; /* Set a maximum width for each booking entry */
  box-shadow: 0 0 10px #ccc;
  border-radius: 5px;
  overflow: hidden; /* Hide overflowing content */
  text-overflow: ellipsis; /* Add ellipsis (...) for long content */
  white-space: nowrap; /* Prevent text from wrapping */
}

.booking-entries-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Adjust as needed for alignment */
  gap: 20px; /* Adjust as needed for spacing */
}

.booking-entry button {
  margin-top: 10px;
}

.form-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border: 0.5px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px #ccc;
}
</style>
