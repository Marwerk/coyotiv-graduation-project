<script>
import { mapState, mapActions } from 'pinia'
import { useAccountStore } from '@/stores/accountStore'
import { useBookingStore } from '@/stores/bookingStore'

export default {
  name: 'UserView',
  computed: {
    ...mapState(useAccountStore, ['user'])
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
div.form-container
  div(v-if='user')
    h3 User Profile
    //- p
    //-   strong Name:
    //-   |  {{ user.name || 'Unknown User'}}
    p
      strong Email:
      |  {{ user.email }}
    h3 Your Bookings
    div(v-for='booking in user.bookings' :key='booking._id')
      p
        strong Check-in:
        |  {{ formatDate(booking.checkInDate) }}
        br
        strong Check-out:
        |  {{ formatDate(booking.checkOutDate) }}
        br
        strong Total Price:
        |  ${{ booking.totalPrice }}
      button(@click='handleUpdateBooking(booking._id)') Update
      button(@click='handleDeleteBooking(booking._id)') Delete
  div(v-else='')
    p Loading...

</template>

<style scoped>
div {
  color: rgb(0, 0, 0);
}

p {
  font-size: 18px;
}
</style>
