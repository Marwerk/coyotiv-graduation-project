<!-- eslint-disable no-unused-vars -->
<script>
import { useAccountStore } from '../stores/accountStore'
import SignupForm from '../components/signupForm.vue'
import { mapState } from 'pinia'

export default {
  components: {
    SignupForm
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  }
}
</script>

<template lang="pug">
//- .site-wallpaper
.column
  h1.form-container Welcome!
.column
  div(v-if='!user')
    SignupForm
</template>

<style scoped>
.content-container {
  display: flex;
  justify-content: space-between; /* Separate columns with space */
  align-items: center;
  padding: 20px; /* Add padding for spacing */
}

.form-container {
  width: 400px; /* Set width of form container */
  margin: 0 auto; /* Center container */
}

.column {
  flex: 1; /* Make columns take equal space */
  margin: 0 10px; /* Add margin for spacing between columns */
}

.column h1 {
  text-align: center;
  margin-top: 20px; /* Add top margin to center vertically within the column */
}
</style>
