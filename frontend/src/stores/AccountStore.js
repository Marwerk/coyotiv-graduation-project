import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000/'

export const useAccountStore = defineStore('Account', {
  state: () => ({
    user: null
  }),
  actions: {
    async fetchUser() {
      try {
        this.user = (await axios.get('/accounts/session')).data
      } catch (error) {
        console.log('Error in line 16 of AccountStore.js', error)
      }
    },
    async login(email, password) {
      this.user = (
        await axios.post('/accounts/session', {
          email: email,
          password: password
        })
      ).data
    },
    async logout() {
      await axios.delete('/accounts/session')
      this.user = null
    }
  }
})