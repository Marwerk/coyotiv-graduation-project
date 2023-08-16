<script>
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'
import { useBookingStore } from './stores/BookingStore'
import { useAccountStore } from './stores/AccountStore'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'App',
  components: {
    RouterView
  },
  created() {
    const bookingStore = useBookingStore()
    const accountStore = useAccountStore()
    // If useBookingStore had any methods or properties you wanted to use, you'd call them here
  },
  async mounted() {
    await this.fetchUser()
  },
  methods: {
    ...mapActions(useAccountStore, ['fetchUser', 'logout'])
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  }
}
</script>

<template>
  <header>
    <div class="containter">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/rooms">Rooms</RouterLink>
        <RouterLink to="/bookings">Bookings</RouterLink>
        <RouterLink v-if="!user" to="/login">Login</RouterLink>
        <RouterLink v-if="!user" to="/signup">Signup</RouterLink>
        <a v-if="user" @click="logout">Logout</a>
      </nav>
    </div>
  </header>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped></style>
