<script>
import roomDetails from './roomDetails.vue'

export default {
  components: {
    roomDetails
  },
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
      return new URL(`../assets/${this.type}-room.jpg`, import.meta.url).href;
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
      roomDetails(:room="rooms[0]")
</template>
