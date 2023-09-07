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
      const grouped = {}

      for (const room of this.rooms) {
        if (!grouped[room.type]) {
          grouped[room.type] = []
        }
        grouped[room.type].push(room)
      }

      // sort groups by desired order
      const sortOrder = ['single', 'double', 'suite']
      const orderedGroups = {}

      sortOrder.forEach((type) => {
        if (grouped[type]) {
          orderedGroups[type] = grouped[type]
        }
      })

      return orderedGroups
    },
    roomImageUrl() {
      return (type) => `/src/assets/img/${type}-room.jpg`
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
        // TODO: polish amenities display
        //- ul.amenities-list
        //-   li.amenity-item(v-for="amenity in roomsOfType[0].amenities" :key="amenity") {{ amenity }}
</template>

<style scoped>
h3 {
  font-size: large;
  text-align: center;
}

.card {
  width: 300px;
  padding: 20px;
  margin: 15px;
  border: 0.5px solid #ccc; /* Add border for styling */
  border-radius: 5px; /* Add border radius for styling */
  background-color: #fff; /* Add background color for styling */
  box-shadow: 0 0 10px #ccc; /* Add box shadow for styling */
  transition: all 0.3s;
}

/* cute 'lil card hover effect */
.card:hover {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.card-header {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-content {
  margin-bottom: -20px;
  text-align: center;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.amenities-list {
  list-style-type: none;
  padding: 0;
}

.amenity-item {
  font-size: 0.9em;
  color: #555;
}
</style>
