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
    // Assuming you may want to fetch fresh user data when this view mounts
    await this.fetchUser()

    // Assuming you might need to fetch bookings, you can use the fetchBookings method.
    // Just ensure to handle and store the bookings data appropriately in your bookingStore.
    // await this.fetchBookings();
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

          // Refresh the user data after successfully deleting the booking
          await this.fetchUser()
        } catch (error) {
          alert('Error deleting booking')
          console.error(error)
        }
      }
    }
  }
}
</script>

<template lang="pug">
div
  div(v-if='user')
    h2 User Profile
    p
      strong Name:
      |  {{ user.firstName }} {{ user.lastName }}
    p
      strong Email:
      |  {{ user.email }}
    h3 Your Bookings
    div(v-for='booking in user.bookings' :key='booking._id')
      p
        strong Check-in:
        |  {{ booking.checkInDate }}
        strong Check-out:
        |           {{ booking.checkOutDate }}
        strong Total Price:
        |  ${{ booking.totalPrice }}
      button(@click='handleUpdateBooking(booking._id)') Update
      button(@click='handleDeleteBooking(booking._id)') Delete
  div(v-else='')
    p Loading...

</template>

<style scoped>
div {
  color: white;
}
</style>
