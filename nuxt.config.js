module.exports = {
  loading: false,
  head: {
    title: "nuxt-hackernews",
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
      { path: '/top/:page(\\d+)?', component: 'pages/_list', meta: { type: 'top' } },
      { path: '/new/:page(\\d+)?', component: 'pages/_list', meta: { type: 'new' } },
      { path: '/show/:page(\\d+)?', component: 'pages/_list', meta: { type: 'show' } },
      { path: '/ask/:page(\\d+)?', component: 'pages/_list', meta: { type: 'ask' } },
      { path: '/job/:page(\\d+)?', component: 'pages/_list', meta: { type: 'job' } },
      { path: '/item/:id(\\d+)', component: 'pages/_item' },
      { path: '/user/:id', component: 'pages/_user' },
      { path: '/', component: 'pages/index' }
    ]
  }
}
