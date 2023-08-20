<script>
import { ref } from 'vue'
import { useSignupStore } from '../stores/signupStore'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')

    const store = useSignupStore()

    const handleSignUp = async () => {
      await store.signUp({ name: name.value, email: email.value, password: password.value })
    }

    return {
      name,
      email,
      password,
      registrationError: store.registrationError,
      handleSignUp
    }
  }
}
</script>

<template>
  <div>
    <h1>Sign Up</h1>

    <form @submit.prevent="handleSignUp">
      <div>
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button to="/" button type="submit">Sign Up</button>
    </form>

    <p v-if="registrationError" class="error">{{ registrationError }}</p>
  </div>
</template>

<style>
.error {
  color: red;
}
</style>
