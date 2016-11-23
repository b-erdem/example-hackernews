<template>
  <nuxt-container>
    <navbar></navbar>
    <nuxt/>
  </nuxt-container>
</template>

<script>
import { sync } from 'vuex-router-sync'
import Navbar from '~components/Header.vue'

export default {
  beforeCreate () {
    sync(this.$store, this.$router)
    this.$store.commit('router/ROUTE_CHANGED', this.$route)
  },
  components: {
    Navbar
  }
}
</script>
