<template>
  <div id="__nuxt">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'nuxt-container',
  head: {"title":"nuxt-hackernews","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","content":"Nuxt.js project"}],"link":[{"rel":"icon","type":"image/x-icon","href":"favicon.ico"}]}
}
</script>


<style src="~assets/main.css" lang="css"></style>

