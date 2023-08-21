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
  async mounted() {
    await this.fetchUser()
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  },
  methods: {
    ...mapActions(useAccountStore, ['fetchUser'])
  }
}
</script>

<template>
  <theNavbar />
  <h1 v-if="user">{{ user?.email }} is logged in</h1>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped>
h1 {
  text-align: center;
  padding-top: 100px;
}
</style>
