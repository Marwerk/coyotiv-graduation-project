<!-- Imperative Programming -->

<script setup>
import { ref } from 'vue'

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
  h1 Counter
  p The count is: {{ count }}
  button(@click='increment') Increment
  button(@click='decrement') Decrement
</template>
