module.exports = {
  loading: false,
  head: {
    title: 'Nuxt.js HN Clone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/main.styl', lang: 'styl' }
  ],
  router: {
    routes: [
      { path: '/item/:id(\\d+)', component: 'pages/_item' },
      { path: '/user/:id', component: 'pages/_user' },
      { path: '/:category/:page(\\d+)?', component: 'pages/_list' }
    ]
  },
  build: {
    vendor: ['vuex-router-sync', 'firebase/app', 'firebase/database']
  }
}
