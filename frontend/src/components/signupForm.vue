<script>
import { useSignupStore } from '../stores/signupStore'

export default {
  name: 'SignupForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      store: useSignupStore()
    }
  },
  computed: {
    registrationFails() {
      return this.store.registrationFails
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

<!-- // TODO: perhaps we could move the signup component to be next to the welcome intro text @ /home? -->
<template lang="pug">
.center-content
  .form-container
    h3.text-center Create your account
    form(@submit.prevent='submitSignup')
      .form-group
        label(for='name') Name:
        input#name(v-model='name' type='text' required='' autocomplete='name' :required="true")
      .form-group
        label(for='email') Email:
        input#email(v-model='email' type='email' required='' autocomplete='email' :required="true")
      .form-group
        label(for='password') Password:
        input#password(v-model='password' type='password' :required="true")
      .form-group.btn-center
        button.submit-btn(type='submit') Sign Up
    p.error(v-if='registrationFails') {{ registrationFails }}
    .text-center
      p.inline Already a user?
      p.inline
        router-link(to="/login") Log in
</template>

<style scoped>
h3 {
  justify-content: center;
}

.form-container {
  max-width: 350px;
  margin: 0 auto; /* Center the form horizontally within the column */
}

input {
  width: 100%;
  padding: 8px 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

router-link {
  color: #007bff; /* A standard bootstrap blue */
  cursor: pointer;
  text-decoration: underline;
}

.inline {
  display: inline-block;
  margin-right: 5px;
}
</style>
