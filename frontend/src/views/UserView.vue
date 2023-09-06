<script>
import { mapState, mapActions } from 'pinia'
import { useAccountStore } from '@/stores/accountStore'
import RoomManagement from '@/components/roomManagement.vue'
import BookingManagement from '@/components/bookingManagement.vue'

export default {
  name: 'UserView',
  components: {
    RoomManagement,
    BookingManagement
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  },
  async created() {
    await this.fetchBookings()
  },
  async mounted() {
    // Fetch fresh user data when view mounts
    await this.fetchUser()
  },
  methods: {
    ...mapActions(useAccountStore, ['fetchUser'])
  }
}
</script>

<template lang="pug">
div.form-container
  div(v-if='user')
    h3 User Profile
    p
      strong Email:
      |  {{ user.email }}

    //- Admin functionalities
    RoomManagement(v-if="user.role === 'admin'")
    BookingManagement(v-if="user.role === 'admin'")

    //- User functionalities
    div(v-else)
      h3 Your Bookings
      div(v-for='booking in user.bookings' :key='booking._id')
        p
          strong Check-in:
          |  {{ formatDate(booking.checkInDate) }}
          br
          strong Check-out:
          |  {{ formatDate(booking.checkOutDate) }}
          br
          strong Room Type:
          |  {{ booking.roomType }}
          br
          strong Total Price:
          |  ${{ booking.totalPrice }}
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
