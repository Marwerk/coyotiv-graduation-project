<script>
import roomCards from '../components/roomCards.vue'
import { useRoomStore } from '../stores/roomStore'

export default {
  components: {
    roomCards
  },
  data() {
    return {
      rooms: [],
      roomsFetched: false
    };
  },
  created() {
    const store = useRoomStore();
    store.fetchAllRooms().then(fetchedRooms => {
      this.rooms = fetchedRooms;
      this.roomsFetched = true;
    });
  }
}
</script>

<template lang="pug">
.div.cards-container
  roomCards(v-if="roomsFetched" :rooms="rooms")
</template>

<style scoped>
h2 {
  color: #fff;
}
</style>
