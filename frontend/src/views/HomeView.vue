<!-- eslint-disable no-unused-vars -->
<script setup>
import TheNavBar from '../components/TheNavBar.vue'
</script>

<template lang="pug">
main
  TheNavBar
  .content
    h1 Welcome to Las Calas
    p In the heart of the capital of Paraguay, Asunción
</template>

<style scoped>
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(0, 0, 0);
}

.content h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.content p {
  font-size: 1.2em;
}
</style>
