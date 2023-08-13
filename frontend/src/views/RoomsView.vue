<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import TopBar from '../components/TopBar.vue'

const rooms = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/rooms')
    rooms.value = response.data
  } catch (error) {
    console.error('Error fetching rooms:', error)
  }
})
</script>

<template lang="pug">
TopBar
div
  h1 All Rooms
  ul
    li(v-for="room in rooms" :key="room._id")
      | Room {{ room.type }}: {{ room.description }} (Capacity: {{ room.capacity }})
</template>

<style lang=""></style>
