import { defineStore } from 'pinia'
import axios from 'axios'

const roomsResponse = await axios.get('http://localhost:3000/rooms')

const rooms = roomsResponse.data

export const useRoomStore = defineStore('RoomStore', {
  state: () => {
    return {
      rooms
    }
  }
})
