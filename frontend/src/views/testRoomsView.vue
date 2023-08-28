<script>
import roomList from '../components/roomList.vue'
import { useRoomStore } from '../stores/roomStore'

export default {
  components: {
    roomList
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
.div.cards-container
  h2 Rooms
  roomList(v-for="(roomsOfType, type) in groupedRooms" :key="type" :type="type" :rooms="roomsOfType")
</template>
