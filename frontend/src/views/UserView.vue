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
    ...mapActions(useBookingStore, ['fetchBookings'])
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
  div(v-else='')
    p Loading...

</template>

<style scoped>
div {
  color: white;
}
</style>
