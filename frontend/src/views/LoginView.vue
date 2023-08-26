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
.container
  h3 Log in to your account
  form(@submit.prevent="submitLogin")
    .form-group
      label(for="email") Email
      input#email(type="email" autocomplete='email' v-model="email" required='')
    .form-group
      label(for="password") Password
      input#password(type="password" v-model="password" required='')
    .form-group.button-container
      button.submit-btn(type="submit") Log in
</template>

<style scoped>
.container {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #ffffff;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 8px 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

/* Centers the button within the form */
.button-container {
  display: flex;
  justify-content: center;
}
/* submit button styling */
.submit-btn {
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  text-align: center;
}
</style>
