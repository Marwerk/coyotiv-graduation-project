<script>
import { RouterView } from 'vue-router'
import { useAccountStore } from './stores/accountStore'
import { mapActions, mapState } from 'pinia'
import theNavbar from '@/components/theNavbar.vue'

export default {
  name: 'App',
  components: {
    theNavbar,
    RouterView
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  },
  methods: {
    ...mapActions(useAccountStore, ['fetchUser'])
  }
}
</script>

<template lang="pug">
.site-wallpaper
  theNavbar

  .center-content
    Suspense
      RouterView
</template>

<style></style>
