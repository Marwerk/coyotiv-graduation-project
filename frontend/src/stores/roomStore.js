import axios from 'axios'
import { defineStore } from 'pinia'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

export const useRoomStore = defineStore('Room', {
  actions: {
    async fetchRooms() {
      return (await axios.get('/rooms')).data
    },
    async fetchRooms(id) {
      return (await axios.get(`/rooms/${id}`)).data
    }
  }
})
