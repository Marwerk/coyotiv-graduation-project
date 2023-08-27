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
    async submitLogin() {
      await this.login({ email: this.email, password: this.password })
      this.$router.push('/')
    }
  }
}
</script>

<template lang="pug">
.center-content
  .form-container
    h3 Log in to your account
    form(@submit.prevent="submitLogin")
      .form-group
        label(for="email") Email
        input#email(type="email" autocomplete='email' v-model="email" required='')
      .form-group
        label(for="password") Password
        input#password(type="password" v-model="password" required='')
      .form-group.btn-center
        button.submit-btn(type="submit") Log in
</template>

<style scoped>
.form-container {
  width: 350px;
}

input {
  width: 100%;
  padding: 8px 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
</style>
