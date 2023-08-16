<script></script>

<template lang="pug">

nav.navbar.navbar-expand-lg.bg-body-tertiary
  .container-fluid.d-flex.align-items-center.justify-content-between
    div.d-flex
      button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation')
        span.navbar-toggler-icon
      router-link.navbar-brand(to="/") Hotel Las Calas
    #navbarText.collapse.navbar-collapse
      ul.navbar-nav.mr-auto.mb-2.mb-lg-0
        li.nav-item
          router-link.nav-link.active(to="/rooms") Rooms
        li.nav-item
          router-link.nav-link(to="/users") User
        li.nav-item
          router-link.nav-link(to="/login") Log In
        li.nav-item
          router-link.nav-link(to="/signup") Sign Up
        li.nav-item
          router-link.nav-link(to="/contact") Contact
        li.nav-item
          router-link.nav-link(to="/bookings") Bookings

    router-link.btn.btn-secondary.btn-sm(type='button' to="/newbooking") Book a room




</template>

<style scoped>
#navbarText {
  flex-grow: 1;
}

.navbar-toggler {
  margin-right: 15px; /* Add some space between the toggler and the brand */
}

.router-link.navbar-brand {
  order: 2; /* make Brand appear second */
}
</style>
