<!-- This is where we define the component's behaviour -->
<script>
import TopBar from './components/TopBar.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    TopBar,
    RouterView
  }
}
</script>

<!-- This is the HTML structure -->
<template>
  <div id="app">
    <TopBar />
    <RouterView />
  </div>
</template>

<!-- This is where we define the styles of the app
by adding "scoped" we ensure that the styling is applied only within this view -->
<style scoped></style>
