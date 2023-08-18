import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

export const useAccountStore = defineStore('Account', {
  state: () => ({
    user: null
  }),
  actions: {
    async fetchUser() {
      try {
        this.user = (await axios.get('/accounts/session')).data
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.user = null
        } else {
          console.error('We have an error while fetching user session:', error)
        }
      }
      console.log('User:', this.user)
    },
    async login({ email, password }) {
      this.user = (await axios.post('/accounts/session', { email, password })).data
    },
    async logout() {
      await axios.delete('/accounts/session')
      this.user = null
    }
    // async signUp({ username, email, password }) {
    //   await axios.post('/accounts', { username, email, password })
    // }
  }
})
