<!-- eslint-disable no-unused-vars -->

<!-- ----- Imperative Programming ----- -->

<script setup>
import { ref } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<template lang="pug">
.counter
  h1 {{ name }}
  p Number of guests: {{ count }}
  button(@click='increment') +
  button(@click='decrement') -
</template>
