import { defineStore } from 'pinia'
import axios from 'axios'

export const useRoomStore = defineStore('roomStore',{
  state: () => ({
    rooms: [],
  }),

  actions: {
    async fetchAllRooms() {
      const response = await axios.get('/rooms')
      this.rooms = response.data
      return this.rooms
    },

    async createRoom(roomData) {
      const response = await axios.post('/rooms', roomData)
      this.rooms.push(response.data)
    },

    async isRoomAvailable(doorNumber, checkInDate, checkOutDate) {
      const room = this.rooms.find(room => room.doorNumber === doorNumber)
      return room.isAvailable(checkInDate, checkOutDate)
    }
  }
})
