<template>
  <nuxt-container>
    <navbar></navbar>
    <nuxt class="view"/>
  </nuxt-container>
</template>

<script>
import { sync } from 'vuex-router-sync'
import Navbar from '~components/Header.vue'

export default {
  beforeCreate () {
    // Synchronise route changes with the store
    sync(this.$store, this.$router)
  },
  components: {
    Navbar
  }
}
</script>
