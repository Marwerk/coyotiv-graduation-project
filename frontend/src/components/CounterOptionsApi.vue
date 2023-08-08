<!-- Declarative Programming -->

<script>
export default {
  name: 'CounterOptionsApi',
  data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>

<template lang="pug">
.counter
  h1 Counter Options API
  p The count is: {{ count }}
  button(@click='increment') Increment
  button(@click='decrement') Decrement
</template>
