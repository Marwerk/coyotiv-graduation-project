<!-- This is a child component of App.vue -->
<template>
  <div class="top-bar">
    <DropDownMenu :items="menuItems" />
    <button class="book-btn">Book a Room</button>
  </div>
</template>

<script>
import { ref } from 'vue'
// This is a child component of TopBar.vue
import DropDownMenu from './DropDownMenu.vue'

export default {
  name: 'TopBar',
  components: {
    DropDownMenu
  },
  setup() {
    const menuItems = ref(['Rooms', 'Location', 'Gallery', 'History', 'Trip to natural reserve'])
    return {
      menuItems
    }
  }
}
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  width: 100%;
}

.book-btn {
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}
</style>
