<script>
export default {
  props: {
    room: {
      type: Object,
      required: true
    }
  }
}
</script>

<template lang="pug">
.div
  p Capacity: {{ room.capacity }} guests
  //- ul.amenities-list
  //-   li.amenity-item(v-for="amenity in room.amenities" :key="amenity") {{ amenity }}
</template>
