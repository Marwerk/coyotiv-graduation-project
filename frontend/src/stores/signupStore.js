import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

export const useSignupStore = defineStore('signup', {
  state: () => ({
    user: null,
    registrationError: null
  }),
  actions: {
    async signup({ name, email, password }) {
      try {
        const response = await axios.post('/users', { name, email, password })
        this.user = response.data
        this.registrationError = null
      } catch (error) {
        this.registrationError = error.response
          ? error.response.data
          : 'An unexpeted error occurred. Please try again later.'
      }
    }
  }
})
