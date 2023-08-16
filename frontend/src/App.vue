<script>
import { RouterView } from 'vue-router'
import { useBookingStore } from './stores/BookingStore'
import { useAccountStore } from './stores/AccountStore'
import axios from 'axios'
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
    ...mapActions(useAccountStore, ['fetchUser'])
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  }
}
</script>

<template>
  <main class="containter">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>

<style scoped></style>
