<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// import TheNavBar from '../components/TheNavBar.vue'

const users = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/users')
    users.value = response.data
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})
</script>

<template lang="pug">
//- TheNavBar
div
  h1 All Users
  ul
    li(v-for="user in users" :key="user._id")
      | {{ user.firstName }} {{ user.lastName }}
</template>

<style lang=""></style>
