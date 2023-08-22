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
  <div class="spacer">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped></style>
