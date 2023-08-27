<script>
import { useSignupStore } from '../stores/signupStore'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      store: useSignupStore()
    }
  },
  computed: {
    registrationError() {
      return this.store.registrationError
    }
  },
  methods: {
    async submitSignup() {
      await this.store.signup({
        name: this.name,
        email: this.email,
        password: this.password
      })
      this.$router.push('/login')
    }
  }
}
</script>

<template lang="pug">
.full-height-center
  .container
    h3 Create your account
    form(@submit.prevent='submitSignup')
      .form-group
        label(for='name') Name:
        input#name(v-model='name' type='text' required='' autocomplete='name')
      .form-group
        label(for='email') Email:
        input#email(v-model='email' type='email' required='' autocomplete='email')
      .form-group
        label(for='password') Password:
        input#password(v-model='password' type='password' required='')
      .form-group.button-container
        button.submit-btn(type='submit') Sign Up
    p.error(v-if='registrationError') {{ registrationError }}
</template>

<style scoped>
.container {
  width: 400px;
  /* margin: 50px auto; */
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

.button-container {
  display: flex;
  justify-content: center;
}
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
