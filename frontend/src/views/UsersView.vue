<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },

  mounted() {
    console.log('The component is mounted')
  },

  async created() {
    const usersResponse = await axios.get('http://localhost:3000/users')

    this.users = usersResponse.data
  }
}
</script>

<template>
  <div class="users">
    <h1>Users</h1>
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
