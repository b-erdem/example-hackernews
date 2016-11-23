<template>
  <div>
    hello
  </div>
</template>

<script>
// import ItemList from '../components/ItemList.vue'

// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
// { path: '/top/:page(\\d+)?', component: createListView('top') },
// { path: '/new/:page(\\d+)?', component: createListView('new') },
// { path: '/show/:page(\\d+)?', component: createListView('show') },
// { path: '/ask/:page(\\d+)?', component: createListView('ask') },
// { path: '/job/:page(\\d+)?', component: createListView('job') },
// export default {
//   return {
//     name: `${type}-stories-view`,
//     // this will be called during SSR to pre-fetch data into the store!
//     preFetch (store) {
//       return store.dispatch('FETCH_LIST_DATA', { type })
//     },
//     render (h) {
//       return h(ItemList, { props: { type }})
//     }
//   }
// }
</script>
