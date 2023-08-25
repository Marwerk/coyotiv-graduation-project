<!-- // TODO: center the list items in the navbar -->

<script>
import '@/assets/base.css'
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

<template lang="pug">
header
  router-link.logo-text(to='/') Las Calas
  input#nav-toggle.nav-toggle(type='checkbox')
  nav
    ul
      li
        router-link(to='/rooms') Rooms
      li
        router-link(to='/contact') Contact
      li(v-if='!user')
        router-link(to='/login') Log In
      li(v-if='!user')
        router-link(to='/signup') Sign Up
      li(v-if='user')
        router-link(to='/' @click='logout') Log Out
  label.nav-toggle-label(for='nav-toggle')
    span
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #585858;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
}

.content {
  height: 200vh;
  background-color: #585858;
  background-blend-mode: multiply;
  background-size: cover;
  display: grid;
  place-items: center;
}

header {
  /* background-color: transparent; */
  background: var(--nav-background);
  text-align: center;
  position: fixed;
  z-index: 999;
  padding-bottom: 0.3em;
  width: 100%;
}
a.logo-text {
  display: inline-block;
  position: relative;
  font-size: 1.8rem;
  color: #fcf6f5;
  text-align: left;
  padding-left: 1em;
  text-decoration: none;
}

.nav-toggle {
  display: none;
}

.nav-toggle-label {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 1em;
  height: 100%;
  display: flex;
  align-items: center;
}

/* How to make the triple bar of the burger menu */
.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after {
  display: block;
  background: #fcf6f5;
  height: 2px;
  width: 2em;
  border-radius: 2px;
  position: relative;
}

.nav-toggle-label span::before,
.nav-toggle-label span::after {
  content: '';
  position: absolute;
}

.nav-toggle-label span::before {
  bottom: 7px;
}

.nav-toggle-label span::after {
  top: 7px;
}

/* Cursor pointer for burger menu on hover */
.nav-toggle-label:hover {
  cursor: pointer;
}
/* End of burger menu*/

nav {
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  background: var(--nav-background);
  width: 100%;
  /* Transition animation for the burger menu */
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;
}

nav ul {
  margin: 0;
  padding: 0;
  padding-bottom: 0em;
  list-style: none;
}

nav li {
  margin-left: 1em;
}

nav a {
  color: #fcf6f5;
  text-decoration: none;
  font-size: 1.2rem;
  /* text-transform: uppercase; */
  opacity: 0;
  transition: opacity 150ms ease-in-out;
}

nav a:hover {
  color: #585858;
}

a.logo-text:hover {
  cursor: pointer;
  color: #585858;
}

.nav-toggle:checked ~ nav {
  transform: scale(1, 1);
}

.nav-toggle:checked ~ nav a {
  opacity: 1;
  transition: opacity 250ms ease-in-out 250ms;
}

@media screen and (min-width: 800px) {
  /* add space between navbar height and content */
  .spacer {
    padding-top: 5em;
  }
  .nav-toggle-label {
    display: none;
  }

  header {
    display: grid;
    grid-template-columns: 0.35fr auto minmax(600px, 2fr) 0.06fr;
  }

  a.logo-text {
    grid-column: 1 / 2;
  }

  nav {
    all: unset;
    grid-column: 3 / 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  nav ul {
    display: flex;
  }

  nav li {
    margin-left: 3em;
    margin-bottom: 0;
  }
  nav a {
    opacity: 1;
    position: relative;
  }

  /* The animated gray bar above the nav links */
  nav a::before {
    content: '';
    display: block;
    height: 5px;
    background: #585858;
    position: absolute;
    top: -0.45em;
    left: 0;
    right: 0;
    transform: scale(0, 1);
    transition: transform ease-in-out 250ms;
  }
  .logo-text::before {
    content: '';
    display: block;
    height: 5px;
    background: #585858;
    position: absolute;
    top: 0em;
    left: 12%;
    right: 35%;
    transform: scale(0, 1);
    transition: transform ease-in-out 250ms;
  }

  nav a:hover::before {
    transform: scale(1, 1);
  }
  .logo-text:hover::before {
    transform: scale(1, 1);
  }
}
</style>
