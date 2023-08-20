<script>
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'
import { useBookingStore } from './stores/bookingStore'
import { useAccountStore } from './stores/accountStore'
// TODO: create userStore for Sign Up, in the store, we would call the route.post handler from our users.js route in the backend
// create a Sign Up view accordingly
import { mapActions, mapState } from 'pinia'

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
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
    <div class="container">
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
  <h1>Logged in as: {{ user?.email }}</h1>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped></style>
