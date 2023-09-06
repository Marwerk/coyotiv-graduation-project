import { defineStore } from 'pinia'
import axios from 'axios'

export const useRoomStore = defineStore('Room',{
  state: () => ({
    rooms: [],
    newRoom: {
      type: '',
      doorNumber: null,
      units: 0,
      capacity: 0,
      amenities: [],
    },
    updatingRoom: null // holds the room currently being updated
  }),

  actions: {
    setNewRoomField(field, value) {
      this.newRoom[field] = value
    },

    setUpdatingRoom(room) {
      this.updatingRoom = room
    },

    async fetchAllRooms() {
      const response = await axios.get('/rooms')
      this.rooms = response.data
      return this.rooms
    },

    async createRoom(roomData) {
      const response = await axios.post('/rooms', roomData)
      this.rooms.push(response.data)
    },

    async deleteRoom(roomId) {
      await axios.delete(`/rooms/${roomId}`)
      this.rooms = this.rooms.filter(room => room._id !== roomId)
    },

    async updateRoom(roomId, updatedData) {
      const response = await axios.patch(`/rooms/${roomId}`, updatedData);
      const index = this.rooms.findIndex(room => room._id === roomId);
      if (index !== -1) {
        this.rooms[index] = response.data;
      }
      this.updatingRoom = null // clears the updating room after editing
  },

    async isRoomAvailable(doorNumber, checkInDate, checkOutDate) {
      const room = this.rooms.find(room => room.doorNumber === doorNumber)
      return room.isAvailable(checkInDate, checkOutDate)
    }
  }
})
