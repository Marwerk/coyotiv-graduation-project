<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    rooms: {
      type: Array,
      required: true
    }
  },
  computed: {
    roomImageUrl() {
      // Dynamically import the image based on room type
      return `/src/assets/img/${this.type}-room.jpg`;
    }
  }
}
</script>


<template lang="pug">
.div
  .card
    img.card-image(:src="roomImageUrl" :alt="`${type} room image`")
    .card-header
      h3 {{ type.charAt(0).toUpperCase() + type.slice(1) }} Room
    .card-content
      .div
        p Capacity: {{ rooms[0].capacity }} guests
        ul.amenities-list
          li.amenity-item(v-for="amenity in rooms[0].amenities" :key="amenity") {{ amenity }}
</template>
