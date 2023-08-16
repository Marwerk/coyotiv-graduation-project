<script>
import axios from 'axios'
import { useAccountStore } from '../stores/AccountStore'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      axios.post(
        'http://localhost:3000/accounts/session',
        {
          email: this.email,
          password: this.password
        },
        {
          withCredentials: true
        }
      )
    }
  }
}
</script>

<template lang="pug">
h2 Log in to your account

form(@submit.prevent="login")
  div
    label(for="email") Email
    input#email(type="email" v-model="email" required)
  div
    label(for="password") Password
    input#password(type="password" v-model="password" required)

  button(type="submit") Log in
</template>
