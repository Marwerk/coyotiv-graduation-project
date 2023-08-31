<script>
import roomCards from '../components/roomCards.vue'
import dateForm from '../components/dateForm.vue'
import { useRoomStore } from '../stores/roomStore'

export default {
  components: {
    roomCards,
    dateForm
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
.div.cards-container
  roomCards(v-if="roomsFetched" :rooms="rooms")
  dateForm(v-if="roomsFetched")
</template>

<style scoped>
h2 {
  color: #fff;
}
</style>
