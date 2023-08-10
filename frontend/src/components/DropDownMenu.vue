<template>
  <div class="dropdown">
    <button @click="toggleDropdown">Menu</button>
    <div v-if="isOpen" class="dropdown-content">
      <a v-for="item in items" :key="item">{{ item }}</a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'DropDownMenu',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }

    return {
      isOpen,
      toggleDropdown
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
