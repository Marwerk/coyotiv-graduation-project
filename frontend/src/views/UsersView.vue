<script setup>
import axios from 'axios'

import Counter from '../components/Counter.vue'
import CounterOptionsApi from '../components/CounterOptionsApi.vue'

const usersResponse = await axios.get('http://localhost:3000/users')

const users = usersResponse.data
</script>

<template>
  <div class="users">
    <h1>Users</h1>
    <Counter />
    <CounterOptionsApi />
    <ul>
      <li v-for="user in users" :key="user.id">
        <a :href="`/users/${user.id}`">
          {{ user.firstName }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: blueviolet;
}

a {
  color: blue;
}
</style>
