<script>
import { mapState, mapActions } from 'pinia'
import { useRoomStore } from '@/stores/roomStore'

export default {
  name: 'RoomManagement',
  computed: {
    ...mapState(useRoomStore, ['rooms', 'newRoom', 'updatingRoom'])
  },
  methods: {
    ...mapActions(useRoomStore, [
      'setNewRoomField',
      'createRoom',
      'deleteRoom',
      'updateRoom',
      'setUpdatingRoom'
    ]),
    startUpdating(room) {
      this.setUpdatingRoom(room)
    },

    async handleAddRoom() {
      try {
        await this.createRoom()
        alert('Room added successfully')
      } catch (error) {
        alert(`Error adding room: ${error.message}`)
        console.error(error)
      }
    },

    async handleDeleteRoom(roomId) {
      const confirmDelete = confirm('Are you sure you want to delete this room?')
      if (confirmDelete) {
        try {
          await this.deleteRoom(roomId)
          alert('Room deleted successfully')
        } catch (error) {
          alert(`Error deleting room: ${error.message}`)
          console.error(error)
        }
      }
    },

    async handleUpdateRoom() {
      if (this.updatingRoom) {
        try {
          await this.updateRoom(this.updatingRoom._id, this.updatingRoom)
          alert('Room updated successfully')
        } catch (error) {
          alert(`Error updating room: ${error.message}`)
          console.error(error)
        }
      }
    }
  }
}
</script>

<template lang="pug">
div.rooms-column
  h3 Add Room
  form(@submit.prevent='handleAddRoom')
    .form-group
      label(for='doorNumber') Door Number:
      input#doorNumber(v-model='newRoom.doorNumber' type='number' required)
      label(for='type') Room Type:
      input#type(v-model='newRoom.type' type='string' required)
      label(for='units') Units created:
      input#units(v-model='newRoom.units' type='number' required)
      label(for='capacity') Guest Capacity:
      input#capacity(v-model='newRoom.capacity' type='number' required)
      label(for='amenities') Amenities:
      input#amenities(v-model='newRoom.amenities' type='string')
    button Add Room

  div(v-if="updatingRoom")
    h3 Update Room
    form(@submit.prevent='handleUpdateRoom')
      .form-group
        label(for='doorNumberUpdate') Door Number:
        input#doorNumberUpdate(v-model='updatingRoom.doorNumber' type='number' required)
        label(for='typeUpdate') Room Type:
        input#typeUpdate(v-model='updatingRoom.type' type='string' required)
        label(for='unitsUpdate') Units created:
        input#unitsUpdate(v-model='updatingRoom.units' type='number' required)
        label(for='capacityUpdate') Guest Capacity:
        input#capacityUpdate(v-model='updatingRoom.capacity' type='number' required)
        label(for='amenitiesUpdate') Amenities:
        input#amenitiesUpdate(v-model='updatingRoom.amenities' type='string')
      button Update Room

  h3 Rooms
  div(v-for='room in rooms' :key='room._id')
    p
      strong Door Number:
      |  {{ room.doorNumber }}
      br
      strong Room Type:
      | {{ room.type }}
    button(@click='startUpdating(room)') Edit
    button(@click='handleDeleteRoom(room._id)') Delete
</template>

<style scoped></style>
