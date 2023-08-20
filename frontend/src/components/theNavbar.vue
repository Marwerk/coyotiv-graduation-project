<script>
import { RouterLink } from 'vue-router'
import { useAccountStore } from '@/stores/accountStore'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'theNavbar',
  components: {
    RouterLink
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  },
  methods: {
    ...mapActions(useAccountStore, ['logout'])
  }
}
</script>

<template>
  <header>
    <div class="container">
      <span class="logo-text">LAS CALAS - APART HOTEL</span>

      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/rooms">Rooms</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li v-if="!user">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!user">
            <router-link to="/signup">Sign Up</router-link>
          </li>
          <li v-if="user">
            <a @click="logout">Log Out</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
body {
  margin: 0;
  background: #222;
  font-family: 'Work Sans', sans-serif;
  font-weight: 800;
}

.container {
  max-width: 100%;
  margin: 0 auto;
}

header {
  background: #55d6aa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header::after {
  content: '';
  display: table;
  clear: both;
}

.logo-text {
  float: left;
  padding: 10px 0;
  font-size: 20px;
}

nav {
  float: right;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  position: relative;
}

nav a {
  color: #444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

nav a:hover {
  color: #000;
}

nav a::before {
  content: '';
  display: block;
  height: 5px;
  background-color: #444;

  position: absolute;
  top: 0;
  width: 0%;
}

nav a:hover::before {
  width: 100%;
  transition: all ease-in-out 270ms;
}
</style>
