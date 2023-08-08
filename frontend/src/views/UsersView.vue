<script setup>
import axios from 'axios'

import Counter from '../components/Counter.vue'

const usersResponse = await axios.get('http://localhost:3000/users')

const users = usersResponse.data
</script>

<template>
  <div class="users">
    <h1>Users</h1>
    <Counter name="Marvin" />
    <Counter name="Numan" />
    <Counter name="Fede" />
  </div>
</template>

<!-- <style scoped>
h1 {
  color: blueviolet;
}

a {
  color: blue;
}
</style> -->
