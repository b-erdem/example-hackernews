<template>
  <item-list :type="$route.params.category"></item-list>
</template>

<script>
import ItemList from '../components/ItemList.vue'

let categories = ['top', 'new', 'show', 'ask', 'job']

export default {
  data ({ store, route, redirect }) {
    if (categories.indexOf(route.params.category) < 0) {
      redirect('/top')
    }
    store.dispatch('FETCH_LIST_DATA', { type: route.params.category })
    return {}
  },
  component: {
    custom: ItemList
  }
}
</script>
