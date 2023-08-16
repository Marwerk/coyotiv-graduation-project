import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAccountStore = defineStore('Account', {
  state: () => ({
    user: null
  }),
  actions: {
    async fetchUser() {
      this.user = await axios.get('http://localhost:3000/accounts/session', {
        withCredentials: true
      }).data
    },
    async login(email, password) {
      this.user = axios.post(
        'http://localhost:3000/accounts/session',
        {
          email: email,
          password: password
        },
        {
          withCredentials: true
        }
      )
    },
    async logout() {
      this.user = axios.delete('http://localhost:3000/accounts/session', {
        withCredentials: true
      })
      this.user = null
    }
  }
})
