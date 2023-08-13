<script setup>
import TopBar from '../components/TopBar.vue'
</script>

<template>
  <main>
    <TopBar />
    <div class="content">
      <h1>Welcome to Las Calas</h1>
      <p>In the heart of the capital of Paraguay, Asunción</p>
    </div>
  </main>
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
