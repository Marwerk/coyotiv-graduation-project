<script>
import { useAccountStore } from '../stores/accountStore'
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
    async doLogin() {
      await this.login({ email: this.email, password: this.password })
      this.$router.push('/')
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
