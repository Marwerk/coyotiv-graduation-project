<script>
import roomCards from '../components/roomCards.vue'
import createBookingForm from '../components/createBookingForm.vue'
import { useRoomStore } from '../stores/roomStore'

export default {
  components: {
    roomCards,
    createBookingForm
  },
  data() {
    return {
      rooms: [],
      roomsFetched: false
    }
  },
  created() {
    const store = useRoomStore()
    store.fetchAllRooms().then((fetchedRooms) => {
      this.rooms = fetchedRooms
      this.roomsFetched = true
    })
  }
}
</script>

<template lang="pug">
//- .site-wallpaper
.div.cards-container
  roomCards(v-if="roomsFetched" :rooms="rooms")
  createBookingForm(v-if="roomsFetched")
</template>

<style scoped>
h2 {
  color: #fff;
}
</style>
