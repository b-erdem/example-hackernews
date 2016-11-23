<template>
  <custom></custom>
</template>

<script>
import ItemList from '../components/ItemList.vue'

let custom

function createListView (type) {
  return {
    name: `${type}-stories-view`,
    // this will be called during SSR to pre-fetch data into the store!
    preFetch (store) {
      return store.dispatch('FETCH_LIST_DATA', { type })
    },
    render (h) {
      return h(ItemList, { props: { type }})
    }
  }
}

export default {
  data ({ route }) {
    custom = createListView(route.meta.type)
    return {}
  },
  component: {
    custom: createListView(this.route.meta.type)
  }
}
</script>
