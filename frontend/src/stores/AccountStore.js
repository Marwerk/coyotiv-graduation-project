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
    }
  }
})
