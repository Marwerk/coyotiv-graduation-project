<script>
export default {
  props: {
    rooms: {
      type: Array,
      required: true
    }
  },
  computed: {
    // groups rooms by type
    groupedRooms() {
      const grouped = {};

      for (const room of this.rooms) {
        if (!grouped[room.type]) {
          grouped[room.type] = [];
        }
        grouped[room.type].push(room);
      }

      // sort groups by desired order
      const sortOrder = ['single', 'double', 'suite'];
      const orderedGroups = {};

      sortOrder.forEach(type => {
        if (grouped[type]) {
          orderedGroups[type] = grouped[type];
        }
      });

      return orderedGroups;
    },
    roomImageUrl() {
      return type => `/src/assets/img/${type}-room.jpg`;
    }
  }
}
</script>

<template lang="pug">
div(v-for="(roomsOfType, type) in groupedRooms" :key="type")
  .card
    img.card-image(:src="roomImageUrl(type)" :alt="`${type} room image`")
    .card-header
      h3 {{ type.charAt(0).toUpperCase() + type.slice(1) }} Room
    .card-content
      div
        p Capacity: {{ roomsOfType[0].capacity }} {{ roomsOfType[0].capacity === 1 ? 'guest' : 'guests' }}
        ul.amenities-list
          li.amenity-item(v-for="amenity in roomsOfType[0].amenities" :key="amenity") {{ amenity }}
</template>
