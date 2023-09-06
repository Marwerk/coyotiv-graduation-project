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
//.site-wallpaper
.form-container
  h1 Welcome!
div(v-if='!user')
  SignupForm

</template>

<style></style>
