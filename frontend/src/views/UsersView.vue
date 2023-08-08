<script setup>
import axios from 'axios'

const usersResponse = await axios.get('http://localhost:3000/users')

const users = usersResponse.data
</script>

<template>
  <div class="users">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.firstName }}
      </li>
    </ul>
  </div>
</template>
