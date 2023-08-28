<script>
import roomCards from '../components/roomCards.vue'
import { useRoomStore } from '../stores/roomStore'

export default {
  components: {
    roomCards
  },
  computed: {
    // groups rooms by type
    groupedRooms() {
      const store = useRoomStore();
      const grouped = {};

      for (const room of store.rooms) {
        if (!grouped[room.type]) {
          grouped[room.type] = [];
        }
        grouped[room.type].push(room);
      }

      return grouped;
    }
  },
  created() {
    const store = useRoomStore()
    store.fetchAllRooms()
  }
}
</script>

<template lang="pug">
h2 Rooms
.div.cards-container
  roomCards(v-for="(roomsOfType, type) in groupedRooms" :key="type" :type="type" :rooms="roomsOfType")
</template>

<style scoped>
h2 {
  color: #fff;
}
</style>
