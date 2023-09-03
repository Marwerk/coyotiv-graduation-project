<script>
export default {
  name: 'ErrorView'
}
</script>

<template lang="pug">
.form-container
  .error-view
    h1 Error 404 - Not Found
    p This project is a work in progress :)
</template>

<style scoped>
.error-view {
  text-align: center;
}

.error-view h1 {
  font-size: 3em;
  color: black;
}
.error-view p {
  font-size: 1.5em;
}
</style>
