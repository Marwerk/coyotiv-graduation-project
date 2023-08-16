<script>
import axios from 'axios'
import { useAccountStore } from '../stores/AccountStore'
import { mapActions } from 'pinia'

export default {
  components: {},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useAccountStore, ['login']),
    doLogin() {
      this.login(this.email, this.password)
    }
  }
}
</script>

<template lang="pug">

h2 Log in to your account

form(@submit.prevent="doLogin")
  div
    label(for="email") Email
    input#email(type="email" v-model="email" required)
  div
    label(for="password") Password
    input#password(type="password" v-model="password" required)

  button(type="submit") Log in
</template>
