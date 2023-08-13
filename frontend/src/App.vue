<script setup>
import { RouterView } from 'vue-router'
import { useBookingStore } from './stores/BookingStore'
useBookingStore()
</script>

<template>
  <main class="containter">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>

<style scoped></style>
